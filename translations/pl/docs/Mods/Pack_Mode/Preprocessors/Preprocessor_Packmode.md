# Preprocesor trybu paczki

Preprocesor trybu Pakietowego zmieni skrypt do wykonania tylko wtedy, gdy w pliku konfiguracyjnym trybu pakietu jest włączony jakiś tryb pakietów

## Połącz

Zadzwonisz do Preprocesora Packmode poprzez dodanie `trybów #packmode` do pliku skryptu, z `trybami` będącymi trybami paczki, w których chcesz uruchomić skrypt

## Przykład

`#packmode normalny ekspert` włączyłby skrypt w trybie normalnym i eksperckim

```zenscript
#packmode normal
import crafttweaker.items.IItemStack;

print("Jeśli pojawię się na twoich dziennikach CT, tryb paczki normalny jest włączony!");
```

## Co to robi

Procesor zezwoli na wykonanie skryptu tylko wtedy, gdy włączony jest określony tryb pakietu.