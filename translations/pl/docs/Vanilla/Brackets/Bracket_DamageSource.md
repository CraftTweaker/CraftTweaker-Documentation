# Obsługa nawiasów Źródła Obrażeń

Obsługa nawiasów źródła obrażeń pozwala na odwołanie się do [źródeł IDamageSource](/Vanilla/Damage/IDamageSource/) w grze.

Jeśli źródło obrażeń nie jest jednym z predefiniowanych źródeł, to stworzy ono nowe o podanej nazwie.

<details>
    <summary>Wstępnie zarejestrowane typy źródeł obrażeń</summary>
    <ul>
        <li>Podstawowe</li>
        <li>ŚWIATŁO</li>
        <li>ON_PLAYLIST_TITLE</li>
        <li>LAVA</li>
        <li>HOT_FLOOR</li>
        <li>W ścianie</li>
        <li>ZWALCZANIE</li>
        <li>KOLEJNE</li>
        <li>STARVE</li>
        <li>CACTUS</li>
        <li>WSZYSTKIE</li>
        <li>Wstecz do ściany</li>
        <li>Świat</li>
        <li>GENERIC</li>
        <li>MAGIC</li>
        <li>ZAWARTOŚĆ</li>
        <li>ANVIL</li>
        <li>Blok</li>
        <li>REPORT_TITLE</li>
        <li>SIECI</li>
    </ul>
</details>

```zenscript
<damageSource:type>;

<damageSource:IN_FIRE>;
```