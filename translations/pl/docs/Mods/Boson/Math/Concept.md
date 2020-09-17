# Koncepcja

Większość zastosowań matematyki w ZenScript może być pokryta za pomocą czterech podstawowych operacji: dodaj, odejmowanie, mnożenie i dzielenie. ZenScript zapewnia również dostęp do funkcji `pow` , która wykonuje operację zasilania. Ale to wszystko. Nie można wykonać bardziej zaawansowanych operacji matematycznych, i wymagałoby pełnej reimplementacji z tablicami funkcji zecerskich i nie skorzystałoby w tym względzie z optymalizacji sprzętu, zwłaszcza dla nowoczesnych procesorów.

To jest miejsce, w którym znajduje się ZenScriptX Math, dostarczając zestaw klas i podstawowych operacji arytmetycznych, które mogą być ogólnej przydatności, korzystając również w większości z optymalizacji sprzętu, ponieważ większość z nich jest wdrażana na natywnym poziomie (poprzez kilka pośrednich czynników związanych z uruchomieniem VM ZenScript).

Każda sekcja dokumentacji dostarczy użytkownikowi listę dostarczonych funkcji i ich zachowania.

Aktualny wykaz oferowanych klas jest następujący:

- [Matematyka](/Mods/Boson/Math/Math/) dla zwykłych funkcji matematycznych (np. sinus, cosine, logarytm...)
