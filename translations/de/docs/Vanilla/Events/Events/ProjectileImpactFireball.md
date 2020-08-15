# ProjectileImpactFireball

Dieses Ereignis wird immer dann abgefeuert, wenn ein Feuerball eine Entität berührt, aber vor dem Schaden, etc, berechnet wird. Es ist **widerrufbar**, und wenn abgebrochen, wird der Effekt nicht bearbeitet.

Die Beschleunigungswerte der Feuerball Einheit sind über zengetters verfügbar.

## Diese Klasse importieren
Es könnte erforderlich sein, [die Klasse](/AdvancedFunctions/Import/) zu importieren, um Fehler zu vermeiden.  
`importieren Sie crafttweaker.event.ProjectileImpactFireballEvent;`

## IEntityEvent wird erweitert
ProjectileImpactFireball Events implementieren die folgenden Schnittstellen und können alle ihre Methoden/Getters/Setter auch aufrufen:

- [IProjectileEvent](/Vanilla/Events/Events/IProjectileEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetters und ZenSetter

Die folgenden Informationen lassen sich von diesem Event (Ereignis) abrufen:

| ZenGetter          | ZenSetter          | Type                                                      |
| ------------------ | ------------------ | --------------------------------------------------------- |
| `fireball`         |                    | [IEntity](/Vanilla/Entities/IEntity/)                     |
| `schießen`         |                    | [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) |
| `accelerationX`    | `accelerationX`    | double                                                    |
| `beschleunigungsY` | `beschleunigungsY` | double                                                    |
| `accelerationZ`    | `accelerationZ`    | double                                                    |
