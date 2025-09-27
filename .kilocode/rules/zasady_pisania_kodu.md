# Zasady Pisania Kodu

Reguły obowiązujące w projekcie dotyczące jakości kodu, testowania i struktury plików.

## Wytyczne

- **Dodawaj TSDoc do każdej metody**: Wszystkie eksportowane funkcje i metody muszą mieć komentarze TSDoc z opisem, parametrami (@param), zwrotem (@returns) i przykładami (@example) jeśli potrzebne.
- **Testy do pokrycia 100%**: Wszystkie komponenty, funkcje i logika muszą mieć pełne pokrycie testami (100% statements, branches, functions, lines).
- **Nie buduj wielkich plików - dziel na mniejsze**: Pliki nie powinny przekraczać 200 linii. Dzieli duże komponenty na mniejsze, logikę na osobne pliki.
- **Separuj logikę i prezentację w różnych plikach**: Logika biznesowa (hooks, utils) powinna być oddzielona od komponentów prezentacyjnych. Używaj custom hooks dla logiki.
