# IPotion

An IPotion object refers a potion in the game.

## Getting an IPotion object
You can get such an object through the use of the Potion Bracket handler

```Java
<potion:strength>;
```

## Zengetters

Currently, all you can do with potions is retrieving some information on them.

| Zengetter    | What does it do                     | Return Type | Example                         |
|--------------|-------------------------------------|-------------|---------------------------------|
| name         | Returns the potion's internal name  | string      | `<potion:strength>.name`        |
| badEffect    | Returns if the potion effect is bad | bool        | `<potion:strength>.badEffect`   |
| liquidColor  | Returns the potion's color          | int         | `<potion:strength>.liquidColor` |
| liquidColour | Returns the potion's colour         | int         | `<potion:strength>.liquidColor` |