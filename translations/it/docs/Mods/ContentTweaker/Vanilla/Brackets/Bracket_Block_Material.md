# Block Material Bracket Handler

Il Block Material Bracket Handler ti dà accesso ai Materiali Blocco nel gioco. Attualmente gli unici Materiali a Blocco supportati sono:

<details>
    <summary>Fare clic per espandere l'elenco dei materiali</summary>
    <ul>
        <li>Aria</li>
        <li>Erba</li>
        <li>Terreno</li>
        <li>Legno</li>
        <li>Roccia</li>
        <li>Ferro</li>
        <li>Incudine</li>
        <li>Acqua</li>
        <li>Lava</li>
        <li>Foglie</li>
        <li>Piante</li>
        <li>Vine</li>
        <li>Spugna</li>
        <li>Tessuto</li>
        <li>Fuoco</li>
        <li>sabbia</li>
        <li>Circuiti</li>
        <li>Tappeto</li>
        <li>Vetro</li>
        <li>Redstone_Light</li>
        <li>TNT</li>
        <li>Corallo</li>
        <li>Ghiaccio</li>
        <li>Ghiaccio</li>
        <li>Neve</li>
        <li>Cactus</li>
        <li>Argilla</li>
        <li>Gourd</li>
        <li>Uovo Di Drago</li>
        <li>Portale</li>
        <li>Torta</li>
        <li>Web</li>
    </ul>
</details>

Block Materials are referenced in the Material Bracket handler in questo modo:

```zenscript
<blockmaterial:name>

<blockmaterial:wood>
```

Se viene trovato il Materiale Blocco, questo restituirà un oggetto [IMaterialDefinition](/Mods/ContentTweaker/Vanilla/Types/Block/IMaterialDefinition/).