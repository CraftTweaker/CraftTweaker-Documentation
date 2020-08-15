# Obsługa wspornika dźwięku

Obsługa wspornika SoundType daje Ci dostęp do SoundTypes w grze. Obecnie obsługiwane są jedyne typy dźwięków to:

<details>
    <summary>Kliknij, aby rozwinąć listę typów</summary>
    <ul>
        <li>Drewno</li>
        <li>Sztaby i pręty drążone ze stali nierdzewnej</li>
        <li>Roślina</li>
        <li>Kamień</li>
        <li>Metale</li>
        <li>Szkło</li>
        <li>Tkanina</li>
        <li>Piasek</li>
        <li>Śnieg</li>
        <li>Drabina</li>
        <li>Kowadło</li>
        <li>Slime</li>
    </ul>
</details>

Typy dźwięków są przywoływane w uchwycie wspornika SoundType w ten sposób:

```zenscript
<soundtype:name>

<soundtype:wood>
```

Jeśli znaleziony zostanie typ dźwięku, zwróci to obiekt [ISoundTypeDefinition](/Mods/ContentTweaker/Vanilla/Types/Sound/ISoundTypeDefinition/).