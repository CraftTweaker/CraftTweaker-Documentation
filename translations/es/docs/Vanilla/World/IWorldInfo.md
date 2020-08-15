# IWorldInfo

La interfaz de información del mundo se utiliza para obtener aún más información de un objeto de [IWorld](/Vanilla/World/IWorld/).

## Importando el paquete

Podría ser necesario que importes el paquete si encuentras algún problema, así que más vale estar seguro que lo sentimos y añadir la importación.  
`importar crafttweaker.world.IWorldInfo;`

## ZenMethods sin parámetros y ZenGetters

| ZenGetter                      | Método                          | Tipo de devolución |
| ------------------------------ | ------------------------------- | ------------------ |
| comandos permitidos            | es Comandos Permitidos()        | pluma              |
| el borde del centro %s         | getBorderCenterX()              | doble              |
| fronteraCenterZ                | getBorderCenterZ()              | doble              |
| borde de daño por bloque       | getBorderDamagePerBlock()       | doble              |
| límite de zona segura          | getBorderSafeZone()             | doble              |
| bordeSize                      | getBorderSize()                 | doble              |
| límite de advertencia          | getBorderWarningDistancia()     | int                |
| límite hora de advertencia     | getBorderWarningTime()          | int                |
| limpiar tiempo                 | getCleanWeatherTime()           | doble              |
| dificultad                     | Obtener Dificultad()            | cadena             |
| opciones generador             | getGeneratorOptions()           | cadena             |
| último tiempo jugado           | Último tiempo jugado()          | largo              |
| tiempo de lluvia               | getRainTime()                   | int                |
| guardar versión                | getSaveVersion()                | int                |
| semilla                        | seed()                          | largo              |
| generarX                       | getSpawnX()                     | int                |
| generarY                       | getSpawnY()                     | int                |
| spawnZ                         | getSpawnZ()                     | int                |
| timbre                         | getThunderTime()                | int                |
| versionId                      | Id()                            | int                |
| nombre de versión              | Nombre de la versión ()         | cadena             |
| mundoNombre                    | getWorldName()                  | cadena             |
| tiempo total del mundo         | %{count} horas                  | largo              |
| boderLerpTarget                | getBoderLerpTarget()            | doble              |
| boderLerpTime                  | getBoderLerpTime()              | largo              |
| dificultad bloqueada           | está bloqueado por Dificultad() | pluma              |
| hardcoreModeActivado           | está HardcoreModeEnabled()      | pluma              |
| inicializado                   | es inicializado()               | pluma              |
| funciones de mapeo habilitadas | es funciones activadas ()       | pluma              |
| truenos                        | isThundering()                  | pluma              |
| versión instantánea            | isVersionSnapshot()             | pluma              |