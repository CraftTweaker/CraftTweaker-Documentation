# Parte

Una parte es el formulario en el que se encuentra un objeto, por ejemplo un engranaje o un oro.

## Importando el paquete

Podría ser necesario que importes el paquete si encuentras algún problema, así que más vale estar seguro que lo sentimos y añadir la importación.  
`importar mods.contenttweaker.Part;`

## Recuperando tal objeto

Puedes recuperar una pieza existente usando el [MaterialSystem](/Mods/ContentTweaker/Materials/MaterialSystem/) o crear una completamente nueva usando el [Constructor de partes](/Mods/ContentTweaker/Materials/Parts/Part_Builder/)

<details>
    <summary>Los siguientes tipos están pre-registrados (Los encabezados son los <a href="../PartType">tipos de partes</a>):</summary>
    <h4>Elementos:</h4>
        <ul>
            <li>Rayo<img src="../Assets/beam.png" alt="icono"></li>
            <li>Rayo<img src="../Assets/bolt.png" alt="icono"></li>
            <li>Cajero<img src="../Assets/casing.png" alt="icono"></li>
            <li>Bomba<img src="../Assets/clump.png" alt="icono"></li>
            <li>Cristal de Cristal<img src="../Assets/crystal.png" alt="icono"></li>
            <li>Mineral triturado (triturado_oro)<img src="../Assets/crushed_ore.png" alt="icono"></li>
            <li>Placa densa (plataforma_densa)<img src="../Assets/dense_plate.png" alt="icono"></li>
            <li>Polvo sucio (sucio_polvo)<img src="../Assets/dirty_dust.png" alt="icono"></li>
            <li>Polvo<img src="../Assets/dust.png" alt="icono"></li>
            <li>Equipo<img src="../Assets/gear.png" alt="icono"></li>
            <li>Ingot<img src="../Assets/ingot.png" alt="icono"></li>
            <li>Nugget<img src="../Assets/nugget.png" alt="icono"></li>
            <li>Placa<img src="../Assets/plate.png" alt="icono"></li>
            <li>Barra<img src="../Assets/rod.png" alt="icono"></li>
            <li>Fragmento<img src="../Assets/shard.png" alt="icono"></li>
        </ul>
    <h4>Bloques:</h4>
        <ul>
            <li>Bloque<img src="../Assets/block.png" alt="icono"></li>
        </ul>
    <h4>Ores:</h4>
        <ul>
            <li>Mena</li>
            <li>Mineral denso (dense_ore)</li>
            <li>Peor olor (pobre_ore)</li>
        </ul>
    <h4>Fluidos:</h4>
        <ul>
            <li>Molten</li>
        </ul><br />
    <h4>Armor:</h4>
        <ul>
            <li>Armadura <img src="../Assets/armor_head.png" alt="icono de cabeza"><img src="../Assets/armor_chest.png" alt="icono del cofre"><img src="../Assets/armor_legs.png" alt="icono de piernas"><img src="../Assets/armor_feet.png" alt="icono de pies"></li>
        </ul>
    <h4>Minecart</h4>
        <ul>
            <li>Minecart</li>
        </ul>
</details>

## Campos

Puedes recuperar la siguiente información de una Parte:

| Método                    | Tipo de devolución                                                              |
| ------------------------- | ------------------------------------------------------------------------------- |
| hasOverlay()              | boolean                                                                         |
| getName()                 | cadena                                                                          |
| getUnlocalizedName()      | cadena                                                                          |
| getShortUnlocalizedName() | cadena                                                                          |
| getPartType()             | [Tipo de pieza](/Mods/ContentTweaker/Materials/Parts/PartType/)                 |
| getPartTypeName()         | cadena                                                                          |
| getOreDictPrefix()        | cadena                                                                          |
| getData()                 | Lista <[IPartDataPiece](/Mods/ContentTweaker/Materials/Parts/PartDataPiece/)\> |

## Regístrate en Material(s)

Puedes usar esto para registrar uno o varios materiales en esta parte

```zenscript
part.registerToMaterial(Material material);
part.registerToMaterials(Material[] materiales);
```

La función devolverá un solo objeto [MaterialPart](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) o una Lista de ellos. dependiendo de si usted registró uno o varios materiales a la vez.