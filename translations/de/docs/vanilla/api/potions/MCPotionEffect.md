# MCPotionEffect

Diese Klasse wurde von einer Mod mit mod-id `crafttweaker` hinzugefügt. Wenn Sie diese Funktion nutzen möchten, müssen Sie diese Mod installiert haben.

## Diese Klasse importieren
Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (wie zum Beispiel ein Array zu bearbeiten), also besser sicher sein als bedauern und fügen Sie den Import.
```zenscript
crafttweaker.api.potion.MCPotionEffect
```

## Implementierte Schnittstellen
MCPotionEffect implementiert die folgenden Schnittstellen. Das bedeutet, dass jede ihnen zur Verfügung stehende Methode auch in dieser Klasse verwendet werden kann.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Methoden
### isBereit

Rückgabewert boolesch

```zenscript
myMCPotionEffect.isReady(Dauer als Int, Verstärker);
```

| Parameter  | Type | Beschreibung                 |
| ---------- | ---- | ---------------------------- |
| dauern     | int  | Keine Beschreibung angegeben |
| verstärker | int  | Keine Beschreibung angegeben |


### newInstance

Gibt [craftweaker.api.potion.MCPotionEffectInstanz](/vanilla/api/potions/MCPotionEffectInstance) zurück

```zenscript
myMCPotionEffect.newInstance(Dauer als Int, Verstärker);
```

| Parameter  | Type | Beschreibung                 | IsOptionale | Standardwert |
| ---------- | ---- | ---------------------------- | ----------- | ------------ |
| dauern     | int  | Keine Beschreibung angegeben | false       | null         |
| verstärker | int  | Keine Beschreibung angegeben | true        | 0            |



## Eigenschaften

| Name           | Type                                                                      | Hat Getter | Hat Setter |
| -------------- | ------------------------------------------------------------------------- | ---------- | ---------- |
| Kommandozeile  | String                                                                    | true       | false      |
| kurativeItems  | Liste <[crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)> | true       | false      |
| displayName    | String                                                                    | true       | false      |
| isBeneficial   | boolean                                                                   | true       | false      |
| isInstant      | boolean                                                                   | true       | false      |
| flüssige Farbe | int                                                                       | true       | false      |
| name           | String                                                                    | true       | false      |

