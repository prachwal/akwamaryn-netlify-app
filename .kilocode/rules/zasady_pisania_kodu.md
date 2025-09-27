# Zasady Pisania Kodu

Reguły obowiązujące w projekcie dotyczące jakości kodu, testowania i struktury plików dla aplikacji Preact + Vite + TypeScript z Zustand.

## Architektura Projektu

### Technologie Kluczowe

- **Frontend**: Preact (nie React) z TypeScript i SCSS
- **Narzędzie Budowania**: Vite z konfiguracją wyjściową do katalogu `dist/` i aliasami ścieżek
- **Zarządzanie Stanem**: Sklepy Zustand (zobacz `src/stores/`)
- **Testowanie**: Vitest + Testing Library + jsdom
- **Wdrożenie**: Netlify (build wychodzi do `dist/`)

### Przegląd Architektury

To jest aplikacja **Preact + Vite + TypeScript** z Zustand do zarządzania stanem. Uwaga: Projekt używa **Preact**, nie React, choć składnia jest prawie identyczna.

#### Kluczowy Stack Technologiczny

- **Frontend**: Preact (nie React) z TypeScript i SCSS
- **Narzędzie Budowania**: Vite z własną konfiguracją i aliasami ścieżek
- **Zarządzanie Stanem**: Sklepy Zustand (zobacz `src/stores/`)
- **Testowanie**: Vitest + Testing Library + jsdom
- **System UI**: Własna biblioteka komponentów w `src/UI/`

## Organizacja Projektu

### Struktura Plików

```text
src/
├── App/
│   ├── App.tsx       # Główny komponent aplikacji
│   ├── App.scss      # Style dla głównego komponentu
│   ├── App.test.tsx  # Testy dla głównego komponentu
│   └── components/
│       └── features/     # Komponenty specyficzne dla funkcji aplikacji
├── UI/
│   ├── index.ts      # Główny barrel export komponentów UI
│   ├── Card/         # Komponenty UI wielokrotnego użytku
│   ├── Layout/       # Komponenty layout (Header, Main, Article, Section, Aside, Nav, Footer, Hamburger)
│   └── styles/       # Globalne pliki CSS/SCSS (index.scss)
├── hooks/            # Własne hooki
├── stores/           # Sklepy Zustand
├── utils/            # Funkcje narzędziowe
└── types/            # Globalne definicje typów TypeScript
```

### Architektura Komponentów

- **Warstwa Aplikacji**: Główna aplikacja w `src/App/` z layoutem i funkcjami
- **System UI**: Wielokrotnego użytku komponenty w `src/UI/` - semantyczne elementy HTML (Header, Main, Article, Section, Aside, Nav, Footer, Card, Hamburger)
- **Komponenty Funkcji**: Komponenty specyficzne dla domeny w `src/App/components/features/`
- **Barrel Exports**: Używaj `src/UI/index.ts` do importowania wielu komponentów UI

### Wzorzec Struktury Komponentu

Każdy komponent UI powinien mieć własną strukturę folderów w `src/UI/ComponentName/`:

```text
ComponentName/
├── ComponentName.tsx    # Logika komponentu
├── ComponentName.scss   # Style komponentu
├── ComponentName.test.tsx # Testy jednostkowe
├── types.ts            # Interfejsy TypeScript
└── index.ts            # Barrel export
```

### Komponenty

- Główny komponent aplikacji znajduje się w `src/App/App.tsx`
- Komponenty aplikacji żyją w `src/App/components/` z współlokalizowanymi stylami i testami
- Komponenty funkcji aplikacji idą do `src/App/components/features/`
- Komponenty UI wielokrotnego użytku są w `src/UI/` (przygotowane na wydzielenie jako osobny podkomponent)
- Każdy komponent ma własny folder: `ComponentName/ComponentName.tsx`, `ComponentName.scss`, `ComponentName.test.tsx`
- Używaj nazwanych eksportów: `export function ComponentName()` nie domyślnych eksportów

### System Layoutu Responsywnego

- Używa CSS Grid i Flexbox z podejściem mobile-first
- **Breakpoints**: `$small: 480px`, `$tablet: 768px`, `$desktop: 1024px`
- **Wzorzec Layout**: Desktop ma sidebar + main, tablet/mobile stackują się pionowo z menu hamburger
- **Typografia Fluid**: Używa `clamp()` dla responsywnych rozmiarów czcionek
- **Menu Mobile**: Slide-in sidebar z overlay, zarządzane przez stan React

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
2. Importy wewnętrzne moduły (używając aliasów ścieżek)
3. Importy względne
4. Pusta linia między grupami

**Przykładowa struktura importów w plikach testowych:**

```typescript
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/preact';
import { useGeolocation } from '@hooks/useGeolocation';

import { GeolocationDisplay } from './GeolocationDisplay';

// Mock the useGeolocation hook
vi.mock('@hooks/useGeolocation', () => ({
  useGeolocation: vi.fn(),
}));
```

**Uwagi dla plików testowych:**

- W plikach testowych, mocki hooków i komponentów są umieszczane po wszystkich importach, przed definicjami testów.
- Nie dodawaj pustej linii między grupami importów zewnętrznych i wewnętrznych w plikach testowych.

### Aliasy Ścieżek

Używaj aliasów ścieżek dla krótszych i bardziej czytelnych importów:

- `@/` → `src/`
- `@components/` → `src/App/components/`
- `@ui/` → `src/UI/`
- `@stores/` → `src/stores/`
- `@hooks/` → `src/hooks/`
- `@utils/` → `src/utils/`
- `@styles/` → `src/styles/`
- `@mytypes/` → `src/types/`

Przykład:

```typescript
import { Counter } from '@components/features/Counter'
import { useCounterStore } from '@stores/counterStore'
import type { GeolocationResponse } from '@mytypes/index'
```

## Wzorce Stylu Kodu

### Wzorzec Komponentu

```typescript
/**
 * Component description
 * @param props - Props description
 * @returns JSX element
 * @example
 * ```tsx
 * <ComponentName className="custom" />
 * ```
 */
export function ComponentName({ className, ...rest }: ComponentProps) {
  return <element className={`base-class ${className || ''}`} {...rest} />
}
```

### Wzorce SCSS

- Używaj `@use '../index.scss' as *;` dla design system variables
- Responsive queries: mobile-first with min-width
- Color functions: `color.scale()`, `color.change()` from Sass
- CSS custom properties for theme variables
- BEM-like class naming for components

### Krytyczne Zmienne Globalne

- `__APP_VERSION__` injected by Vite from package.json
- Must be declared in vite-env.d.ts and mocked in tests

## Zasady TypeScript

### Bezpieczeństwo Typów

- **NIGDY nie używaj typu `any`** - to pokonuje cel TypeScript
- Używaj `unknown` zamiast `any` gdy typ jest naprawdę nieznany
- Preferuj asercje typów z `as` tylko gdy absolutnie konieczne
- Włącz ścisłe opcje kompilatora w tsconfig.json
- Używaj `strict`, `noImplicitAny`, `strictNullChecks`, `noUnusedLocals`, `noUnusedParameters`

### Definicje Typów

- Always define interfaces for props (even if empty)
- Use `ComponentChildren` from 'preact' for child props
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

- Co-located tests using `.test.tsx` suffix
- Mock Zustand stores: `vi.mock('@stores/storeName')`
- Mock global `__APP_VERSION__` in test setup
- Use Testing Library patterns: `screen.getByRole()`, `userEvent.setup()`
- Global test setup in `src/test/setup.ts`

## Workflow Rozwoju

### Dostępne Komendy

- `npm run dev` - Dev server with HMR
- `npm run build` - Production build (outputs to `dist/`)
- `npm run preview` - Preview built application
- `npm run test` - Tests in watch mode
- `npm run test:ui` - Visual test dashboard
- `npm run coverage` - Coverage reports to `public/coverage/`
- `npm run docs` - Generate TypeDoc documentation (outputs to `docs/`)
- `npm run lint:fix` - Auto-fix linting issues

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

### Kluczowe Pliki i Punkty Integracji

- `src/UI/styles/index.scss` - Globalne style i zmienne systemu design
- `src/UI/index.ts` - Główny barrel export komponentów UI
- `vite.config.ts` - Aliasy ścieżek i konfiguracja build
- `src/test/setup.ts` - Globalna konfiguracja testów
- `src/App/App.scss` - Główny responsywny system layout

### Zmienne Globalne

- `__APP_VERSION__` wstrzykiwana przez Vite z wersji package.json
- Musi być zadeklarowana w vite-env.d.ts i mockowana w testach

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

## Historia Poprawek

### Aktualizacja Dokumentacji na Podstawie Copilot Instructions

- **Data**: 2025-09-27
- **Opis**: Zaktualizowano `.kilocode/rules/zasady_pisania_kodu.md` na podstawie `.github/copilot-instructions.md` w celu zapewnienia spójności i kompletności dokumentacji projektu.
- **Zmiany wprowadzone**:
  - Dodano szczegółowy przegląd architektury projektu
  - Rozszerzono opis struktury komponentów UI z wymienionymi komponentami
  - Dodano sekcję "System Layoutu Responsywnego" z breakpointami i wzorcami layout
  - Zaktualizowano wzorce stylu kodu z przykładami komponentów i SCSS
  - Poprawiono konwencje testowania zgodnie z instrukcjami
  - Dodano sekcję "Kluczowe Pliki i Punkty Integracji"
  - Zaktualizowano komendy npm z angielskimi opisami
  - Poprawiono informacje o zmiennych globalnych
- **Powód**: Zapewnienie spójności między dokumentacją projektu a instrukcjami dla Copilot, co ułatwia utrzymanie i rozwój projektu.

### Poprawki Importów w Plikach Testowych

- **Data**: 2025-09-27
- **Opis**: Zaktualizowano strukturę importów w plikach testowych. Mocki hooków i komponentów są teraz umieszczane po wszystkich importach, przed definicjami testów. Usunięto wymóg pustej linii między grupami importów zewnętrznych i wewnętrznych w plikach testowych, aby uniknąć błędów ESLint i poprawić czytelność.
- **Przykład przed poprawką**:

  ```typescript
  import { describe, it, expect, vi, beforeEach } from 'vitest';
  import { render, screen } from '@testing-library/preact';

  // Mock the useGeolocation hook
  vi.mock('@hooks/useGeolocation', () => ({
    useGeolocation: vi.fn(),
  }));

  import { useGeolocation } from '@hooks/useGeolocation';

  import { GeolocationDisplay } from './GeolocationDisplay';
  ```

- **Przykład po poprawce**:

  ```typescript
  import { describe, it, expect, vi, beforeEach } from 'vitest';
  import { render, screen } from '@testing-library/preact';
  import { useGeolocation } from '@hooks/useGeolocation';

  import { GeolocationDisplay } from './GeolocationDisplay';

  // Mock the useGeolocation hook
  vi.mock('@hooks/useGeolocation', () => ({
    useGeolocation: vi.fn(),
  }));
  ```

- **Powód**: Poprawka zapewnia lepszą organizację kodu w testach, gdzie wszystkie importy są grupowane razem, a mocki są wyraźnie oddzielone. Eliminuje również konflikty z regułami ESLint dotyczącymi pustych linii między grupami importów.
