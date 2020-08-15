# Blokowanie badań

## Funkcja:

Ta funkcja pozwala na zablokowanie zdobycia badań za grupą wymagań. Oznacza to na przykład, że można ustawić nabycie „Badania Golema” za wymogiem posiadania określonego wymiaru (jak widać w przykładzie poniżej). Oznacza to, że musisz być w tym wymiarze, aby zdobyć badania naukowe, jakkolwiek po zakończeniu badań, które otrzymasz. Nie "resetuj" lub "unlearnt" zostawiając wymiar lub już nie spełniając wymagań w ogóle!

## Składnia:

    mods.compatskills.Thaumcraft.addResearchLock(String research Key, String... wymagania);
    
    mods.compatskills.Thaumcraft.addResearchLock("GOLEMVISION", "dim|1");