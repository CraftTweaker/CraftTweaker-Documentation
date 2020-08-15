# Gestore Staffa SoundType

Il Gestore staffe SoundType ti dà accesso ai tipi sonori nel gioco. Attualmente gli unici tipi sonori supportati sono:

<details>
    <summary>Fare clic per espandere l'elenco dei tipi</summary>
    <ul>
        <li>Legno</li>
        <li>Terreno</li>
        <li>Pianta</li>
        <li>Pietra</li>
        <li>Metallo</li>
        <li>Vetro</li>
        <li>Tessuto</li>
        <li>Sabbia</li>
        <li>Neve</li>
        <li>Scala</li>
        <li>Incudine</li>
        <li>Slime</li>
    </ul>
</details>

I tipi sonori sono referenziati in SoundType Bracket handler in questo modo:

```zenscript
<soundtype:name>

<soundtype:wood>
```

Se il tipo sonoro viene trovato, restituirà un oggetto [ISoundTypeDefinition](/Mods/ContentTweaker/Vanilla/Types/Sound/ISoundTypeDefinition/).