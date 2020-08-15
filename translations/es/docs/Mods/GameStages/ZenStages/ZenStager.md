# ZenStager

Esta clase es el manejador principal para crear nuevos [Stages](/Mods/GameStages/ZenStages/Stage/), que entonces puedes construir para decirle al juego que empiece a poner en escena lo que has puesto. Viene cargado con métodos para permitir una integración fácil con otros mods usando la [API de GameStages](https://minecraft.curseforge.com/projects/game-stages) junto con algunos ajustes personalizados para hacer que los modpack vivan tan poco más fácil.

Puedes encontrar más información y la última fuente para la clase [aquí](https://github.com/DarkPacks/ZenStages/blob/master/src/main/java/uk/artdude/zenstages/stager/ZenStager.java).

## Importando el paquete

ZenStager : `import mods.zenstages.ZenStager;`

Fase *(Recomendado para importar también)* : `importar mods.zenstages.Stage;`

## Métodos

### Crear Etapa

Crea y devuelve la nueva etapa [](/Mods/GameStages/ZenStages/Stage/)

```zenscript
// mods.zenstages.ZenStager.initStage(string stageName);
var TestStage = ZenStager.initStage("test");
```

Cuando hayas creado tu Escenario deberías crear un archivo estático/global que contenga lo siguiente para que puedas acceder al Escenario en otras clases de scripts.

**Nota: No tenga la `initStage` y la `creación estática` en el mismo script. Debido a limitaciones y otros problemas, el `initStage` será llamado cada vez que haga referencia a un miembro estático. Así que mantén separada la init y la creación estática**

```zenscript
import mods.zenstages.ZenStager;

static TestStage = ZenStager.getStage("test"); // El nombre es el que acaba de crear.
```

### Métodos auxiliares

Consigue una Etapa [](/Mods/GameStages/ZenStages/Stage/) *(Returna nulo si no se encuentra)*

```zenscript
// mods.zenstages.ZenStager.getStage(string stageName);
var TestStageGet = ZenStager.getStage("test");
```

Obtén un mapa de las [etapas](/Mods/GameStages/ZenStages/Stage/) que se crean.

```zenscript
// mods.zenstages.ZenStager.getStageMap();
var StageMap as Stage[string] = ZenStager.getStageMap();
```

Obtener un mapa de los líquidos escalonados.

```zenscript
// mods.zenstages.ZenStager.getStagedLiquids();
var LiquidMap as ILiquidStack[][string] = ZenStager.getStagedLiquids();
```

### Métodos de Staging

Añadir un nombre de paquete. Esto requiere [RecipeStages](/Mods/GameStages/RecipeStages/RecipeStages/) para ser instalado. Esto sigue la misma lógica que [aquí](/Mods/GameStages/RecipeStages/RecipeStages/).

```zenscript
// mods.zenstages.ZenStager.addPackage(string packageName, Stage[] stages);
ZenStager.addPackage("appeng", [TestStage]);
```

Añadir un nombre de paquete. Esto requiere [RecipeStages](/Mods/GameStages/RecipeStages/RecipeStages/) para ser instalado. Esto sigue la misma lógica que [aquí](/Mods/GameStages/RecipeStages/RecipeStages/).

```zenscript
// mods.zenstages.ZenStager.addContainer(string packageName, Stage[] stages);
ZenStager.addContainer("my.awesome.container", [TestStage]);
```

Obtener la etapa del ingrediente, si se estrena, devolverá la etapa [](/Mods/GameStages/ZenStages/Stage/) o nulo si no se encuentra.

```zenscript
// mods.zenstages.ZenStager.getIngredientStage(ingrediente IIngredient);
var StickStage as Stage = ZenStager.getIngredientStage(<minecraft:stick>);
```

Obtener la etapa de la pila de líquidos, si se instala retornará la etapa [](/Mods/GameStages/ZenStages/Stage/) o nulo si no se encuentra.

```zenscript
// mods.zenstages.ZenStager.getLiquidStage(ILiquidStack liquidStack);
var StickStage as Stage = ZenStager.getLiquidStage(<liquid:water>);
```

Obtener la etapa del nombre de la receta, si se estrena, devolverá la [Etapa](/Mods/GameStages/ZenStages/Stage/) o nula, si no se encuentra. Requiere [RecipeStages](/Mods/GameStages/RecipeStages/RecipeStages/) para ser instalado.

```zenscript
// mods.zenstages.ZenStager.getRecipeNameStage(string recipeName);
var RecipeNameStage as Stage = ZenStager.getRecipeNameStage("minecraft:boat");
```

Obtener la etapa del contenedor, si se estrena, devolverá la etapa [](/Mods/GameStages/ZenStages/Stage/) o nulo si no se encuentra. Requiere [RecipeStages](/Mods/GameStages/RecipeStages/RecipeStages/) para ser instalado.

```zenscript
// mods.zenstages.ZenStager.getContainerStages(string containerName);
var ContainerStage as Stage = ZenStager.getContainerStages("my.awesome.container");
```

Obtener la etapa del paquete, si se estrena, devolverá la etapa [](/Mods/GameStages/ZenStages/Stage/) o null si no se encuentra. Requiere [RecipeStages](/Mods/GameStages/RecipeStages/RecipeStages/) para ser instalado.

```zenscript
// mods.zenstages.ZenStager.getPackageStages(string packageName);
var PackageStage as Stage = ZenStager.getPackageStages("appeng");
```

Obtener la etapa de dimensión, si se estrena, devolverá la etapa [](/Mods/GameStages/ZenStages/Stage/) o nulo si no se encuentra. Requiere [DimStages](/Mods/GameStages/DimensionStages/DimensionStages/) para ser instalado.

```zenscript
// mods.zenstages.ZenStager.getDimensionStage(int dimId);
var DimStage as Stage = ZenStager.getDimensionStage(-1);
```

Obtener la etapa de criaturas, si se estrena, devolverá la etapa [](/Mods/GameStages/ZenStages/Stage/) o nulo si no se encuentra. Requiere [Móviles](/Mods/GameStages/MobStages/MobStages/) para ser instalado.

```zenscript
// mods.zenstages.ZenStager.getMobStage(string mobName);
var MobStage as Stage = ZenStager.getMobStage("minecraft:skeleton");
```

Obtener la etapa Material de TiC, si se instala devolverá la Etapa [](/Mods/GameStages/ZenStages/Stage/) o nula, si no se encuentra. Requiere que [TinkerStages](/Mods/GameStages/TinkerStages/TinkerStages/) esté instalado.

```zenscript
// mods.zenstages.ZenStager.getTiCMaterialStage(string material);
var MobStage as Stage = ZenStager.getTiCMaterialStage("bronze");
```

### Comprobar si algo está en fase

Tipos soportados:

- contenedor
- dimensión
- ingrediente
- mob
- mod
- mulitblock
- mineral
- paquete
- receta
- tinker

```zenscript
// mods.zenstages.ZenStager.isStaged(string type, string value);
// mods.zenstages.ZenStager.isStaged(string type, int value);
// mods.zenstages.ZenStager.isStaged(string type, IIngredient value);
ZenStager.isStaged("ingredient", <minecraft:stick>);
ZenStager.isStaged("container", "my. wesome.container");
ZenStager.isStaged("Mob", "minecraft:skeleton");
ZenStager.isStaged("tinker", "bronze");
ZenStager.isStaged("tinker", "tconstruct:crossbow");
ZenStager.isStaged("recipename", "minecraft:boat");
ZenStager.isStaged("dimension", -1);
```

### Depuración

Llamar a este método hará que el mod verifique en las etapas [](/Mods/GameStages/ZenStages/Stage/) que ha creado y que está etapado. Para ver si tiene un error *staged* algo más de una vez. Si se encuentra alguna, se registran en el archivo `crafttweaker.log`. Dile en qué fase se encuentra y en qué fase se encuentra. Este es un método/herramienta ideal para usar antes de lanzar actualizaciones a un paquete de mods o sólo el desarrollo general de un paquete de mods.

```zenscript
// mods.zenstages.ZenStager.checkConflicts();
ZenStager.checkConflicts();
```

### Construir etapas

Esto es **importante** para llamar después de que haya completado la adición de entradas a sus etapas. Esto llama a todos los mods a escenificar realmente dichas entradas. ¡Si no se ejecuta este método, no se instalará nada!

```zenscript
// mods.zenstager.ZenStager.buildAll();
ZenStager.buildAll();
```