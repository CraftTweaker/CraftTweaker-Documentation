# HCMovement

HCMovement influenza la velocità con cui il Giocatore può muoversi mentre si trova o all'interno di determinati blocchi. Per esempio, per impostazione predefinita, si cammina più lentamente sull'erba ma più veloce sulla pietra.

Il valore è un numero decimale compreso tra 0 e 2, dove 1 è la velocità normale senza HCMovement, meno di 1 è più lento, più grande di 1 è più veloce.

HCMovement solo accetta i blocchi come ingressi.

```zenscript
mods.betterwithmods.Movement.set(IItemStack stack, valore float);

```