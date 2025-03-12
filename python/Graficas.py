import matplotlib.pyplot as plt

# Datos inventados
trabajadores = ['Juan', 'Ana', 'Luis', 'Marta', 'Carlos']
vacas_atendidas = [150, 220, 180, 300, 90]  # Número de vacas atendidas por trabajador

# Crear el gráfico de barras
plt.figure(figsize=(10, 6))  # Tamaño del gráfico
plt.bar(trabajadores, vacas_atendidas, color='skyblue')

# Personalizar el gráfico
plt.title('Vacas Atendidas por Trabajador', fontsize=16)
plt.xlabel('Trabajadores', fontsize=14)
plt.ylabel('Vacas Atendidas', fontsize=14)
plt.ylim(0, 350)  # Límite del eje Y (de 0 a 350 para dejar un poco de espacio arriba)

# Añadir etiquetas con el número exacto de vacas atendidas
for i, valor in enumerate(vacas_atendidas):
    plt.text(i, valor + 10, str(valor), ha='center', va='bottom', fontsize=12)

# Mostrar el gráfico
plt.tight_layout()  # Ajustar el layout para que no se corten las etiquetas
plt.show()