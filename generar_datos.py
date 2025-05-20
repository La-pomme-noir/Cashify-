from faker import Faker
import pandas as pd
import random
import json

fake = Faker('es_CO')  # Generar datos en español colombiano

def generar_cliente(valido=True):
    if not valido:
        tipo_error = random.choice(['nombre', 'email', 'edad', 'plan', 'fecha', 'duplicado'])
    else:
        tipo_error = None

    nombre = fake.name() if tipo_error != 'nombre' else fake.word()
    email = fake.email() if tipo_error != 'email' else fake.word()
    edad = random.randint(18, 80) if tipo_error != 'edad' else random.choice([-1, 999, ""])
    plan = random.choice(['Basico', 'Empresarial', 'Corporativo']) if tipo_error != 'plan' else random.choice(['', 'Planazo', 123])
    fecha = fake.iso8601() if tipo_error != 'fecha' else "32-abril-2025"
    origen = random.choice(['ads', 'referido', 'landing', 'instagram'])
    conversion = random.choice([True, False])

    return {
        "nombre": nombre,
        "email": email,
        "edad": edad,
        "interesadoEn": plan,
        "fechaRegistro": fecha,
        "origen": origen,
        "conversion": conversion
    }

# Crear dataset
registros = []

# 12% con errores
errores = int(100000 * 0.12)

# Registros erróneos
for _ in range(errores):
    registros.append(generar_cliente(valido=False))

# Registros válidos
for _ in range(100000 - errores):
    registros.append(generar_cliente(valido=True))

# Agregar duplicados (1% duplicados)
for i in range(1000):
    registros.append(random.choice(registros[:1000]))

# Guardar como archivo JSON
with open("clientesPotenciales.json", "w", encoding="utf-8") as f:
    json.dump(registros, f, ensure_ascii=False, indent=2)

print("✅ Archivo clientesPotenciales.json generado con 100.000+ registros.")
