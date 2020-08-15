# Material

## Llamando al paquete

El paquete `mods.gregtech.material` contiene todas las clases que necesitarás para tratar con materiales.

## Objeto Material

Un objeto de `mods.gregtech.material.Material` representa un material en GregTech, con algunos miembros útiles que usted puede tratar.

Propiedades:

| Nombre             | Tipo                           | Descripción                                                             |
| ------------------ | ------------------------------ | ----------------------------------------------------------------------- |
| color              | int                            | Color del material en formato RVA                                       |
| Fórmula química    | cadena                         | Fórmula química de este material                                        |
| iconSet            | Conjunto de iconos             | Icono establecido para la generación de meta-elementos de este material |
| componentes        | Lista inmutable<materialstack> | Lista de este componente de material                                    |
| generaciónFlagsRaw | largo                          | Banderas de generación de este material (ver MatFlags)                  |
| elemento           | Elemento                       | El elemento de este material consiste en                                |

Getters:

| Nombre          | Tipo   | Descripción                              |
| --------------- | ------ | ---------------------------------------- |
| radioactive     | pluma  | Verdadero si este material es radiactivo |
| protons         | largo  |                                          |
| neutrones       | largo  |                                          |
| masa            | largo  |                                          |
| densidad        | largo  |                                          |
| camelCaseString | cadena |                                          |
| unlocalizedName | cadena |                                          |
| localizedName   | cadena | Sólo el lado del cliente                 |
| nombre          | cadena | Nombre en el Registro de Material        |

Métodos:

| Nombre (Parámetros)          | Descripción                     |
| ---------------------------- | ------------------------------- |
| addFlags(String... banderas) | Añadir banderas de generación   |
| hasFlag(String bandName)     | Tiene una bandera de generación |

`MaterialStack` puede ser creado por `material * número`, al igual que [Cantidad de Ingrediente](/Vanilla/Variable_Types/IIngredient.md) o FluidStack.

### FluidMaterial

`FluidMaterial` es un material que contiene características de fluido. Su superclase es `Material` , por lo que todos los miembros de `Material` todavía están disponibles.

Propiedades:

| Nombre             | Tipo | Descripción |
| ------------------ | ---- | ----------- |
| Temperatura fluida | int  |             |

Getters:

| Nombre    | Tipo                                                              | Descripción             |
| --------- | ----------------------------------------------------------------- | ----------------------- |
| hasFluid  | pluma                                                             |                         |
| hasplasma | pluma                                                             |                         |
| es Gásico | pluma                                                             |                         |
| fluido    | [Definición de ILiquidido](/Vanilla/Liquids/ILiquidDefinition.md) | líquido material        |
| plasma    | [Definición de ILiquidido](/Vanilla/Liquids/ILiquidDefinition.md) | líquido plasma material |

### Material basura

`DustMaterial` es un material que contiene características de polvo. Su superclase es `FluidMaterial` por lo que todos los miembros de `FluidMaterial` todavía están disponibles.

Propiedades:

| Nombre                        | Tipo            | Descripción                                                                                                                                                                 |
| ----------------------------- | --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| oreMultiplier                 | int             | Multiplicador de la cantidad de minerales triturada durante la maceración                                                                                                   |
| Por Multiplicador de Producto | int             | Multiplicador de cantidad de subproductos durante la pulverización                                                                                                          |
| fundición Multiplicador       | int             | Multiplicador de la cantidad de artículos de fundición durante la fundición de artículos de vainilla                                                                        |
| fundición directa             | SolidMaterial   | Material al que resultará la fundición del mineral de este material                                                                                                         |
| lavado                        | FluidMaterial   | Material en el que el mineral de este material debe ser lavado para dar salida adicional                                                                                    |
| separatedInto                 | Material basura | Durante la separación electromagnética, este mineral de material se separará en este material y en este material especificado por este campo                                |
| tiempo quemado                | int             | Quemar tiempo de este material cuando se utiliza como combustible en fundición de horno, cero o valor negativo indica que este material no puede ser usado como combustible |

Getters:

| Nombre           | Tipo                 | Descripción                                                            |
| ---------------- | -------------------- | ---------------------------------------------------------------------- |
| por productos    | Lista<fluidmaterial> | Lista de minerales por productos                                       |
| nivel de cosecha | int                  | Nivel de herramienta necesario para recolectar bloque de este material |

### SolidMaterial

`SolidMaterial` es un material que contiene características sólidas. Su superclase es `DustMaterial` por lo que todos los miembros de `DustMaterial` todavía están disponibles.

Propiedades:

| Nombre         | Tipo            | Descripción                                                                                                 |
| -------------- | --------------- | ----------------------------------------------------------------------------------------------------------- |
| handleMaterial | SolidMaterial   | El material especificado aquí será requerido como mango para hacer una herramienta de este material         |
| macerar en     | Material basura | Macerando cualquier elemento de este material resultará el material especificado en este campo, por defecto |

Getters:

<table>
  <tr>
    <th>
      Nombre
    </th>
    
    <th>
      Tipo
    </th>
    
    <th>
      Descripción
    </th>
  </tr>
  
  <tr>
    <td>
      toolSpeed
    </td>
    
    <td>
      flotante
    </td>
    
    <td>
      Velocidad de herramientas fabricadas con este material, 1.0f por defecto
    </td>
  </tr>
  
  <tr>
    <td>
      durabilidad de herramientas
    </td>
    
    <td>
      int
    </td>
    
    <td>
      Durabilidad de las herramientas fabricadas con este material, 0 para materiales que no pueden ser usados para herramientas
    </td>
  </tr>
  
  <tr>
    <td>
      encantamientos de herramientas
    </td>
    
    <td>
      Lista<enchantmentdata>
    </td>
    
    <td>
      Encantamiento a aplicar a las herramientas hechas con este material
    </td>
  </tr>
</table>

### IngotMaterial

`IngotMaterial` es un símbolo que contiene características de lingote. Su superclase es `SolidMaterial` por lo que todos los miembros de `SolidMaterial` todavía están disponibles.

Los materiales de tinta pueden utilizarse como alambre, cable y tubo de fluido. Esas propiedades pueden ser configuradas por `setCableProperties(voltaje largo, int baseAmperage, int lossPerBlock)` y `setFluidPipeProperties(int through hput, int maxTemperature, boolean gasProof)`.

Por ejemplo:

```zenscript
var ingotMaterial = MaterialRegistry.createIngotMaterial(2052, "test", 0x1a2f3e, "ingot", 1);
ingotMaterial.setCableProperties(128, 4, 1); // 128EU/t 4A 1 pérdida/bloque
```

## Datos de encantamiento

`gregtech.mods.EnchantmentData` se puede encontrar en `SolidMaterial#toolEnchantments`, son un almacenamiento interno de un encantamiento con niveles.

Pueden ser lanzados en `crafttweaker.enchantments.IEnchantmentDefinition` llamando a `encantamiento` getter, y el nivel está disponible con `nivel` getter.

Para añadir un encantamiento para herramientas en `SolidMaterial`, simplemente llame a `addToolEnchantment(encantamiento IEnchantment)`para añadir un tipo de datos de encantamiento CraftTweaker.

Ejemplo de material de Fortuna I:

```zenscript
var material = MaterialRegistry.get("iron"); // Modifica el material de hierro
material.addToolEnchantment(<enchantment:minecraft:fortune> * 1); // Crea un objeto de encantamiento y añádelo
```

## Banderas de generación de material

Estas banderas son aplicables a los materiales.

| Nombre (mayúsculas y minúsculas)   | Descripción                                                                                                                                                                                                                                                                      |
| ---------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DECOMPOSITION_DESCRIPTION          | Permite la generación de recetas de descomposición de electrólizer                                                                                                                                                                                                               |
| DECOMPOSITION_DESCRIPTION          | Permite la generación de recetas de descomposición centrifuge                                                                                                                                                                                                                    |
| ENVIANDO                           | Agrega material si tiene aura en constante combustión                                                                                                                                                                                                                            |
| FLAMABLE                           | Añadir al material si es una especie de inflamable                                                                                                                                                                                                                               |
| EXPLOSIVO                          | Añadir al material si es algún tipo de explosivo                                                                                                                                                                                                                                 |
| No hay UNIFICATION                 | Añadir al material para desactivar completamente su unificación                                                                                                                                                                                                                  |
| Sin recalificación                 | Añadir material si alguno de sus objetos no puede ser reciclado para obtener escrutinio                                                                                                                                                                                          |
| DECOMPOSITION                      | Deshabilita la generación de recetas de descomposición para este material y todos los materiales que lo tienen como componente                                                                                                                                                   |
| DECOMPOSITION_REQUIERES_HYDROGEN | La receta de descomposición requiere hidrógeno como entrada adicional. La cantidad es igual a la cantidad de entrada                                                                                                                                                             |
| GENERATE_TITLE                     | Generar una placa para este material, Si es material de polvo, la receta del compresor de polvo en la placa se generará, Si es material de metal, se generarán recetas de la máquina de plegado, si se encuentra el bloque, la receta de la máquina de corte también se generará |
| Descartar                          | Genera una placa densa.                                                                                                                                                                                                                                                          |
| No es una tarea                    | Añada material si no puede ser trabajado por otros medios, que aplastar o fundir. Se utiliza para materiales recubiertos.                                                                                                                                                        |
| No hay SMASHING                    | Añada material si no se puede utilizar para las técnicas habituales de trabajo del Metal, ya que no es posible doblarlo.                                                                                                                                                         |
| No se mide                         | Añadir al material si es imposible fundirlo                                                                                                                                                                                                                                      |
| INDUCION_SMELTING_BTN            | Añada al material si sale menos en un fundador de inducción.                                                                                                                                                                                                                     |
| INT_FLUID                          | Agrega al material si se funde en líquido (y también generará líquido para este material)                                                                                                                                                                                        |
| EXCLUDE                            |                                                                                                                                                                                                                                                                                  |
| EXCLUDE COMPRESSOR                 |                                                                                                                                                                                                                                                                                  |
| CRISTALLA                          | Si este material es criable                                                                                                                                                                                                                                                      |
| Longitud                           |                                                                                                                                                                                                                                                                                  |
| Construcción                       |                                                                                                                                                                                                                                                                                  |
| GENERATE_FLUID_BLOC              | Siempre que el sistema deba generar bloques de fluido para este material fluido                                                                                                                                                                                                  |
| Plasma                             | Añadir esta bandera para permitir la generación de plasma para este material                                                                                                                                                                                                     |
| GAS                                | Marca el estado del material como gas                                                                                                                                                                                                                                            |
| GENERATE_ROD                       |                                                                                                                                                                                                                                                                                  |
| GENERATE_TITLE                     |                                                                                                                                                                                                                                                                                  |
| GENERATE_TITLE                     |                                                                                                                                                                                                                                                                                  |
| Módulo superior                    | Si este material es molible con un mortero simple                                                                                                                                                                                                                                |

## Conjunto de iconos Material

Los conjuntos de iconos están disponibles en `mods.gregtech.material.MaterialIconSet`.

- NINGUNA
- METÁLICO
- DUL
- MAGNÉTICA
- CUARTAR
- DIAMONADO
- EMERALADO
- SHINY
- MUCHAS
- ROUGH
- FINAL
- SAND
- FINTAR
- RUBY
- LAPIS
- PUEDEN
- FLUID
- GAS
- LIGNITE
- OPAL
- GLASS
- WOOD
- LIBERAR
- Horizonal
- Vertical
- PAPER
- NETHERSTAR

Los obsequios son `nombre`.

Los métodos son `toString()`y el método estático `getByName(String name)`.

## Registro de Material

El registro de materiales es un ayudante para obtener, listar y crear materiales en el sistema de unificación.

Puede importar la clase `mods.gregtech.material.MaterialRegistry`.

### Uso

```zenscript
#loader gregtech
import mods.gregtech.material.MaterialRegistry;

// Tenga en cuenta que el tipo de retorno puede ser nulo si no se encontró nada
var material = MaterialRegistry. et(materialName);

// Lista todos los materiales registrados
var materialList = MaterialRegistry. etAllerial();

// Establecer la Durabilidad de herramientas en 0 si el lingot no puede ser usado como herramienta
// Tenga en cuenta que un parámetro @Optional puede ser dejado afuera, y ha sido reemplazado por 0 por defecto.
// Se refiere a material de Gema e información no se puede utilizar como herramienta por defecto.
MaterialRegistry.createFluidMaterial(int metaItemSubId, nombre de cadena, color int, iconSet de String, @MaterialStack[] materialComponentes);

MaterialRegistry. reateDustMaterial(int metaItemSubId, nombre de cadena, color int, icono de cadena, int. cosecha, @Optional MaterialStack[] materialComponents);

MaterialRegistry. reateGemMaterial(int metaItemSubId, nombre de cadena, color de la cadena, iconSet de la cadena, int. cosechar, @Optional MaterialStack[] materialComponents, @Optional float toolSpeed, @Optional int toolDurability);

MaterialRegistry. reateIngotMaterial(int metaItemSubId, nombre de cadena, color de la cadena, icono de la cadena, int. cosecha, @Optional MaterialStack[] materialComponents, @Optional float toolSpeed, @Optional int toolDurability, @Optional int blastFurnaceTemperature);
```

### Ejemplo

```zenscript
#loader gregtech
import mods.gregtech.material.MaterialRegistry;

val dustMaterial = MaterialRegistry.createDustMaterial(700, "test", 0xFFAA33, "dull", 2);
dustMaterial. ddFlags(["GENERATE_ORE", "GENERATE_PLATE"]);

//Crea un material de gema con una descripción que muestra la fórmula química
//Esto genera automáticamente una receta de electrólizador para dividir este material en sus partes constituyentes.
val gemFancy = MaterialRegistry.createGemMaterial(701, "some_fancy_gemstone", 0x0F3E4E2, "gem_horizontal", 1, [<material:beryllium>*4, <material:silicon>*2, <material:oxygen>*9, <material:hydrogen>*2], 1. , 0);

//Cualquier material previamente registrado puede ser utilizado, incluyendo los personalizados.
val ingotComplex = MaterialRegistry.createIngotMaterial(702, "complex_alloy", 0xF6872E, "brillante", 1, [<material:copper>*3, <material:electrum>*1, <material:redstone>*9, <material:some_fancy_gemstone>*2], 3.5, 0);
```