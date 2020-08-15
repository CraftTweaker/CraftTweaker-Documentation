# Ignoruj błędy nawiasów

Ten preprocesor ustawia twój skrypt na ignorowanie błędów backet.  
To NIE MOŻE w żaden sposób, kształt lub magicznie poprawia twój skrypt, co odpowiada dziennikowi błędów.

## Połącz

Możesz wywołać preprocesor IgnoreBracketErrors poprzez umieszczenie `#ignoreBracketErrors` w pliku skryptu.  
Ten Preprocesor jest specyficzny dla pliku, więc wywoływanie go w jednym pliku nie ma wpływu na innych (przynajmniej nie dla tego, co dany procesor jest zainteresowany.

## Co to robi

Gdy preprocesor jest wywołany w pliku, wszystkie błędy w nawiasach zostaną ustawione.  
To nie zmienia w żaden sposób przedmiotowych linii, zamiast tego jedyną zmianą jest to, że Twój log nie będzie zawierał odpowiednich linii.