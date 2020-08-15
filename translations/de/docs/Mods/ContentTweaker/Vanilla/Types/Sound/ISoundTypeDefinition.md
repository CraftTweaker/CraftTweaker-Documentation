# ISoundTypeDefinition

Ein ISoundTypeDefinition-Objekt repräsentiert einen Sound (Typ) im Spiel. Ein Soundtyp ist fast immer an einen oder mehrere Blöcke gebunden.

## Dieses Paket importieren

Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben. Seien Sie also besser sicher als entschuldigen und fügen Sie den Import hinzu.  
`importieren mods.contenttweaker.SoundType;`

## Aufruf eines ISoundTypeDefinition-Objekts

Sie können ein solches Objekt mit dem [Klang Typ Klammerhandler](/Mods/ContentTweaker/Vanilla/Brackets/Bracket_Sound_Type/)erhalten:  
`<soundtype:wood>`

## ZenMethoden ohne Parameter

| ZenMethode      | Rückgabetyp                                                                             | Definition                                                                      |
| --------------- | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| getVolume()     | float                                                                                   | Gibt die Lautstärke des Typs zurück                                             |
| getPitch()      | float                                                                                   | Gibt die Tonhöhe des Typs zurück                                                |
| getBreakSound() | [ISoundEventDefinition](/Mods/ContentTweaker/Vanilla/Types/Sound/ISoundTypeDefinition/) | Gibt den Ton zurück, der auftritt, wenn der zugehörige Block defekt ist         |
| getStepSound()  | [ISoundEventDefinition](/Mods/ContentTweaker/Vanilla/Types/Sound/ISoundTypeDefinition/) | Gibt den Ton zurück, der auftritt, wenn der zugehörige Block eingeschaltet wird |
| getPlaceSound() | [ISoundEventDefinition](/Mods/ContentTweaker/Vanilla/Types/Sound/ISoundTypeDefinition/) | Gibt den Ton zurück, der auftritt, wenn der zugehörige Block platziert wird     |
| getHitSound()   | [ISoundEventDefinition](/Mods/ContentTweaker/Vanilla/Types/Sound/ISoundTypeDefinition/) | Gibt den Ton zurück, der auftritt, wenn der zugehörige Block berührt wird       |
| getFallSound()  | [ISoundEventDefinition](/Mods/ContentTweaker/Vanilla/Types/Sound/ISoundTypeDefinition/) | Gibt den Ton zurück, der auftritt, wenn der zugehörige Block fällt              |