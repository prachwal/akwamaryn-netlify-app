# Zasady Pisania Kodu

Reguły obowiązujące w projekcie dotyczące jakości kodu, testowania i struktury plików dla aplikacji Preact + Vite + TypeScript z Zustand.

## Architektura Projektu

### Technologie Kluczowe

- **Frontend**: Preact (nie React) z TypeScript i SCSS
- **Narzędzie Budowania**: Vite z konfiguracją wyjściową do katalogu `dist/`
- **Zarządzanie Stanem**: Sklepy Zustand (zobacz `src/stores/`)
- **Testowanie**: Vitest + Testing Library + jsdom
- **Wdrożenie**: Netlify (build wychodzi do `dist/`)

## Organizacja Projektu

### Struktura Plików

```text
src/
├── components/
│   ├── ui/           # Wielokrotnego użytku komponenty UI
│   ├── layout/       # Komponenty layoutu
│   └── features/     # Komponenty specyficzne dla funkcji
├── hooks/            # Własne hooki
├── stores/           # Sklepy Zustand
├── utils/            # Funkcje narzędziowe
└── styles/           # Pliki CSS/SCSS
```

### Komponenty

- Komponenty żyją w `src/components/` z współlokalizowanymi stylami i testami
- Komponenty funkcji idą do `src/components/features/`
- Każdy komponent ma własny folder: `ComponentName/ComponentName.tsx`, `ComponentName.scss`, `ComponentName.test.tsx`
- Używaj nazwanych eksportów: `export function ComponentName()` nie domyślnych eksportów

### Wzorzec Sklepu (Zustand)

```typescript
// Postępuj zgodnie z tym wzorcem w src/stores/
export const useStoreName = create<StateInterface>((set) => ({
  // właściwości stanu
  // metody akcji wywołujące set()
}))
```

## Wytyczne Jakości Kodu

### TSDoc i Dokumentacja

- **Dodawaj TSDoc do każdej metody**: Wszystkie eksportowane funkcje i metody muszą mieć komentarze TSDoc z opisem, parametrami (@param), zwrotem (@returns) i przykładami (@example) jeśli potrzebne.
- Dodawaj komentarze JSDoc dla wszystkich komponentów i eksportowanych funkcji
- Dołącz bloki `@example` w JSDoc

### Struktura Plików i Rozmiar

- **Nie buduj wielkich plików - dziel na mniejsze**: Pliki nie powinny przekraczać 200 linii. Dzieli duże komponenty na mniejsze, logikę na osobne pliki.
- **Separuj logikę i prezentację w różnych plikach**: Logika biznesowa (hooks, utils) powinna być oddzielona od komponentów prezentacyjnych. Używaj custom hooks dla logiki.

### Importy

Importy postępują zgodnie ze ścisłym porządkiem wymuszanym przez ESLint:

1. Importy zewnętrzne biblioteki
2. Importy wewnętrzne moduły (względne importy)
3. Pusta linia między grupami

**Przykładowa struktura importów w plikach testowych:**

```typescript
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { renderHook, waitFor } from '@testing-library/preact'

import { useGeolocation } from './useGeolocation'

// Mock fetch globally
```

### Aliasy Ścieżek

Używaj aliasów ścieżek dla krótszych i bardziej czytelnych importów:

- `@/` - `src/`
- `@components/` - `src/components/`
- `@stores/` - `src/stores/`
- `@hooks/` - `src/hooks/`
- `@utils/` - `src/utils/`
- `@styles/` - `src/styles/`

Przykład:

```typescript
import { Counter } from '@components/features/Counter'
import { useCounterStore } from '@stores/counterStore'
```

## Zasady TypeScript

### Bezpieczeństwo Typów

- **NIGDY nie używaj typu `any`** - to pokonuje cel TypeScript
- Używaj `unknown` zamiast `any` gdy typ jest naprawdę nieznany
- Preferuj asercje typów z `as` tylko gdy absolutnie konieczne
- Włącz ścisłe opcje kompilatora w tsconfig.json
- Używaj `strict`, `noImplicitAny`, `strictNullChecks`, `noUnusedLocals`, `noUnusedParameters`

### Definicje Typów

- Używaj `interface` dla props komponentów i kształtów stanu
- Używaj `type` dla unii i prostych transformacji typów
- Używaj PascalCase dla typów, interfejsów, enumów i komponentów
- Używaj camelCase dla zmiennych, funkcji i metod
- Prefiksuj nieużywane parametry podkreśleniem: `function Component(_props: Props)`

## Zasady Preact

### Komponenty JSX

- Używaj komponentów funkcyjnych domyślnie, unikaj komponentów klasowych chyba że absolutnie konieczne
- Każdy komponent powinien być we własnym pliku o tej samej nazwie
- Używaj PascalCase dla nazw komponentów i plików
- Pliki komponentów powinny mieć rozszerzenie `.jsx` lub `.tsx`

### JSX

- Używaj samozamykających tagów dla komponentów bez dzieci
- Używaj camelCase dla atrybutów HTML (className, onClick, itp.)
- Preferuj destrukturyzację props w parametrach funkcji
- Używaj fragmentów (`<>...</>`) zamiast niepotrzebnych wrapper divów

### Hooki

- Prefiksuj wszystkie własne hooki z 'use'
- Własne hooki powinny być czyste i wielokrotnego użytku
- Umieszczaj własne hooki w katalogu `src/hooks/`
- Każdy własny hook powinien mieć własny plik

## Testowanie

### Wymagania Testowania

- **Testy do pokrycia 100%**: Wszystkie komponenty, funkcje i logika muszą mieć pełne pokrycie testami (100% statements, branches, functions, lines).
- Pisz testy jednostkowe dla wszystkich komponentów używając Testing Library
- Testuj zachowanie komponentów, nie szczegóły implementacji
- Dołącz testy dostępności używając jest-axe
- Mockuj zewnętrzne zależności odpowiednio

### Konwencje Testowania

- Mockuj sklepy Zustand w testach używając `vi.mock()`
- Mockuj globalną zmienną `__APP_VERSION__` w setupie testów
- Używaj wzorców Testing Library: `screen.getByRole()`, `userEvent.setup()`
- Pliki testów współlokalizowane z komponentami, używając sufiksu `.test.tsx`

## Workflow Rozwoju

### Dostępne Komendy

- `npm run dev` - Uruchom serwer deweloperski
- `npm run build` - Zbuduj projekt do produkcji
- `npm run preview` - Podgląd zbudowanej aplikacji
- `npm run test` - Uruchom testy w trybie watch
- `npm run test:ui` - Uruchom testy z dashboardem UI
- `npm run coverage` - Generuj raporty pokrycia testami (wychodzi do `coverage/`)
- `npm run docs` - Generuj dokumentację TypeDoc (wychodzi do `docs/`)
- `npm run lint` / `npm run lint:fix` - Sprawdzanie/naprawianie ESLint

### CI Pipeline

Projekt używa GitHub Actions dla automatycznego CI:

- **Testowanie**: Uruchamiane na push do `main` i pull requestach
- **Macierze testów**: Testy na Node.js 20.x i 22.x
- **Kroki CI**:
  - Instalacja zależności
  - Sprawdzanie kodu (linting)
  - Uruchomienie testów z pokryciem (Vitest + v8 coverage, wykluczając `public/`)
  - Budowanie projektu (wyjście do `dist/`)
  - Wysłanie raportów pokrycia do Codecov (format LCOV)

### Zmienne Globalne

- `__APP_VERSION__` jest wstrzykiwana przez Vite z wersji package.json
- Musi być zadeklarowana w globalnych ESLint i mockowana w testach

## Wydajność i Optymalizacja

### Optymalizacja Bundla

- Importuj tylko to, czego potrzebujesz z preact/compat jeśli używasz bibliotek React
- Używaj `preact/hooks` zamiast importowania z 'preact' dla hooków
- Preferuj mniejsze, natywne dla Preact biblioteki nad ciężkimi alternatywami React

### Wydajność

- Używaj `memo()` dla kosztownych komponentów renderujących się często
- Implementuj odpowiednie key props w listach
- Unikaj inline funkcji w JSX gdy możliwe - ekstraktuj do useCallback lub definiuj poza komponentem
- Używaj `useMemo()` dla kosztownych obliczeń

## Bezpieczeństwo i Dostępność

### Dostępność

- Używaj semantycznych elementów HTML gdy możliwe
- Dodawaj odpowiednie etykiety ARIA i role
- Zapewnij, że nawigacja klawiszowa działa poprawnie
- Zachowaj właściwą hierarchię nagłówków

### Bezpieczeństwo

- Zawsze sanitizuj wejście użytkownika
- Używaj dangerouslySetInnerHTML oszczędnie i bezpiecznie
- Waliduj dane otrzymane z API
- Implementuj właściwą Content Security Policy

## Workflow Git i Rozwoju

### Standardy Commitów

- Używaj konwencjonalnych wiadomości commit
- Trzymaj commity atomowe i skoncentrowane
- Dołącz testy z commitami funkcji
- Aktualizuj dokumentację ze zmianami

### Nazewnictwo Branchy

- Używaj opisowych nazw branchy (feature/, bugfix/, hotfix/)
- Trzymaj branchy skoncentrowane na pojedynczych funkcjach lub naprawach
- Regularnie synchronizuj z główną branchą
