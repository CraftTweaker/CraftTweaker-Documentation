# Gestore Staffa Eventi Suoni

Il Gestore staffe SoundEvent ti dà accesso ai SoundEvents nel gioco.  
Controlla [questo](https://minecraft.gamepedia.com/Sounds.json) per una lista di eventi sonori vaniglia!

I tipi sonori sono referenziati nel gestore staffa evento sonoro in questo modo:

Vanilla

```zenscript
<soundevent:name>

<soundevent:ambient.cave>
```

Mod Aggiunta

```zenscript
<soundevent:modID:name>

<soundevent:minecraft:ambient.cave>
```

Se il tipo sonoro viene trovato, restituirà un oggetto [ISoundEventDefinition](/Mods/ContentTweaker/Vanilla/Types/Sound/ISoundEventDefinition/).