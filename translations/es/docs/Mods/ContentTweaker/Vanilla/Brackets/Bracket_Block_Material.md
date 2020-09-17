# Manejador de bloques de material

The Block Material Bracket Handler te da acceso a los Bloques de Materiales en el juego. Actualmente el único bloque de materiales soportados son:

<details>
    <summary>Haga clic para expandir la lista de materiales</summary>
    <ul>
        <li>Aire</li>
        <li>Hierba</li>
        <li>Terreno</li>
        <li>Madera</li>
        <li>Roca</li>
        <li>Hierro</li>
        <li>Yunque</li>
        <li>Agua</li>
        <li>Lava</li>
        <li>Hojas</li>
        <li>Plantas</li>
        <li>Vine</li>
        <li>Esponja</li>
        <li>Ropa</li>
        <li>Fuego</li>
        <li>arena</li>
        <li>Circuitos</li>
        <li>Alfombra</li>
        <li>Cristal</li>
        <li>Piedra_Luz</li>
        <li>TNT</li>
        <li>Coral</li>
        <li>Hielo</li>
        <li>Hielo empaquetado</li>
        <li>Nieve fabricada</li>
        <li>Cactus</li>
        <li>Arcilla</li>
        <li>Gourd</li>
        <li>Huevo de Dragón</li>
        <li>Portal</li>
        <li>Pastel</li>
        <li>Web</li>
    </ul>
</details>

Los materiales de bloque son referenciados en el manejador de soportes Material de esta manera:

```zenscript
<blockmaterial:name>

<blockmaterial:wood>
```

Si se encuentra el Material del Bloque, esto devolverá un objeto [IMaterialDefinition](/Mods/ContentTweaker/Vanilla/Types/Block/IMaterialDefinition/).