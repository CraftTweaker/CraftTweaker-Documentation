# Material Klammerhandler blockieren

Der Klammerhandler für Blockmaterial gibt dir Zugriff auf die Blockmaterialien im Spiel. Derzeit werden nur Block-Materialien unterstützt:

<details>
    <summary>Klicken, um die Materialliste zu erweitern</summary>
    <ul>
        <li>Luft</li>
        <li>Gras</li>
        <li>Boden</li>
        <li>Holz</li>
        <li>Felsen</li>
        <li>Eisen</li>
        <li>Amboss</li>
        <li>Wasser</li>
        <li>Lava</li>
        <li>Blätter</li>
        <li>Pflanzen</li>
        <li>Vine</li>
        <li>Schwamm</li>
        <li>Tuch</li>
        <li>Feuer</li>
        <li>sand</li>
        <li>Schaltkreise</li>
        <li>Teppich</li>
        <li>Glas</li>
        <li>Redstone_Hell</li>
        <li>TNT</li>
        <li>Korallen</li>
        <li>Eis</li>
        <li>Gepackt_Eis</li>
        <li>Hergestellte_Schnee</li>
        <li>Cactus</li>
        <li>Lehm</li>
        <li>Gourd</li>
        <li>Drachen_Ei</li>
        <li>Portal</li>
        <li>Kuchen</li>
        <li>Web</li>
    </ul>
</details>

Blockmaterialien werden auf diese Weise im Materialklappenhandler referenziert:

```zenscript
<blockmaterial:name>

<blockmaterial:wood>
```

Wenn das Blockmaterial gefunden wird, wird ein [IMaterialDefinition](/Mods/ContentTweaker/Vanilla/Types/Block/IMaterialDefinition/) Objekt zurückgegeben.