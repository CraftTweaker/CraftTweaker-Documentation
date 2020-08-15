# SoundType Klammerhandler

Der SoundType Bracket Handler gibt Ihnen Zugriff auf die SoundTypen im Spiel. Derzeit werden nur Soundtypen unterstützt:

<details>
    <summary>Klicken, um die Typenliste zu erweitern</summary>
    <ul>
        <li>Holz</li>
        <li>Boden</li>
        <li>Pflanze</li>
        <li>Stein</li>
        <li>Metall</li>
        <li>Glas</li>
        <li>Tuch</li>
        <li>Sand</li>
        <li>Schnee</li>
        <li>Leiter</li>
        <li>Amboss</li>
        <li>Slime</li>
    </ul>
</details>

Soundtypen werden auf diese Weise im SoundType Bracket Handler referenziert:

```zenscript
<soundtype:name>

<soundtype:wood>
```

Wenn der SoundType gefunden wurde, wird ein [ISoundTypeDefinition](/Mods/ContentTweaker/Vanilla/Types/Sound/ISoundTypeDefinition/) Objekt zurückgegeben.