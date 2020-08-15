# Tagi

Tagi to potężna koncepcja, która jest obecna w Minecrafcie Vanilla od 1.13. Pozwala graczom i twórcom datapaków zdefiniować zestaw elementów, które mają być uznane za takie same w określonym kontekście, usunięcie części twardego kodowania bloków i elementów w kodzie.

Tagi są reprezentowane jako zestaw plików JSON umieszczonych w katalogu `data/<namespace>/tags/<tag-type>` gdzie `przestrzeń nazw` identyfikuje przestrzeń nazw, do której należą tagi, i `<tag-type>` typ elementów grupy tagów.

Koncepcja ta może wydawać się podobna pod względem koncepcji, jak słownik Ore i tak naprawdę jest prawie taka sama. Jednak inaczej niż słownik rudy tagi mogą się również odnosić do siebie nawzajem, a niektóre działają jako grupy innych. Ponadto, podczas gdy słownik rudy działa tylko z przedmiotami (np. rzeczy, które mogą być umieszczone w twoim ekwipunku), tagi działają również z blokami, płynami i innymi typami w razie potrzeby.

Wdrożenie Bośni różni się od wdrażania w Vanilli ze względu na ogromną różnicę w wewnętrznych zmianach w 1. 3, ale działa prawie tak samo, z wyjątkiem umożliwienia łatwiejszego rozszerzenia modyfikacji z nowymi typami tagów. Z tego powodu integracja CraftTweaker również jest inna.

Aby rozpocząć, przeczytaj jak [uzyskać tag za pomocą uchwytu nawiasów](/Mods/Boson/Tags/BracketHandler/).
