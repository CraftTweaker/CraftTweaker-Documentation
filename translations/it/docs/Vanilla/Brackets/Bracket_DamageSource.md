# DamageSource Bracket Handler

Il Gestore delle parentesi di origine del danno consente di fare riferimento a [IDamageSources](/Vanilla/Damage/IDamageSource/) nel gioco.

Se la fonte del Danno non è una di quelle predefinite, ne creerà una nuova con il nome dato.

<details>
    <summary>Tipi Sorgenti Danno Preregisterati</summary>
    <ul>
        <li>IN_FIRE</li>
        <li>LIGHTNING_BOLT</li>
        <li>ON_FIRE</li>
        <li>LAVA</li>
        <li>HOT_FLOOR</li>
        <li>IN_WALL</li>
        <li>RIPARTIZIONE</li>
        <li>DROWN</li>
        <li>INIZIA</li>
        <li>CACTUS</li>
        <li>QUADRO</li>
        <li>INTO_WALL</li>
        <li>WORLD</li>
        <li>GENERIC</li>
        <li>MAGIC</li>
        <li>SENZA</li>
        <li>ANVIL</li>
        <li>FALLING_BLOCK</li>
        <li>DRAGON_BREATH</li>
        <li>FIREWORKS</li>
    </ul>
</details>

```zenscript
<damageSource:type>;

<damageSource:IN_FIRE>;
```