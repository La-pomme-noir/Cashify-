import json
import pandas as pd

# Abrir archivo JSON generado antes
with open("clientesPotenciales.json", "r", encoding="utf-8") as f:
    datos = json.load(f)

# Convertir a DataFrame para análisis
df = pd.DataFrame(datos)

# Cantidad total de registros
print(f"\nTotal registros: {len(df)}")

# Registros con nombre vacío o sospechoso
errores_nombre = df[df["nombre"].str.len() < 4]
print(f"\nErrores en nombre: {len(errores_nombre)}")

# Correos sin @ o con formato inválido
errores_email = df[~df["email"].str.contains("@")]
print(f"Errores en email: {len(errores_email)}")

# Edades fuera de rango
# Crear una copia de edades como texto
edades_texto = df["edad"].astype(str)

# Filtrar no numéricos
errores_no_numericos = edades_texto[~edades_texto.str.replace('.', '', 1).str.isnumeric()].index

# Convertir los que sí son numéricos
edades_numericas = pd.to_numeric(edades_texto, errors='coerce')
errores_fuera_de_rango = df[
    (edades_numericas < 10) | (edades_numericas > 100)
].index

# Unir todos los errores de edad
errores_edad_total = df.loc[errores_no_numericos.union(errores_fuera_de_rango)]

print(f"Errores en edad: {len(errores_edad_total)}")


# Planes inválidos
errores_plan = df[~df["interesadoEn"].isin(["Basico", "Empresarial", "Corporativo"])]
print(f"Errores en planes: {len(errores_plan)}")

# Fechas mal formateadas
errores_fecha = df[~df["fechaRegistro"].str.contains("-")]
print(f"Errores en fechaRegistro: {len(errores_fecha)}")

# Registros duplicados
duplicados = df[df.duplicated()]
print(f"Registros duplicados: {len(duplicados)}")
