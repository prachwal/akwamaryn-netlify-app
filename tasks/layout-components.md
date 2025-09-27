# Komponenty Layout

Lista komponentów UI pozwalających zbudować kompletny layout aplikacji zgodnie z zasadami projektu. Każdy komponent zawiera pełną checklistę implementacyjną.

## Komponenty Layout

### Header

Komponent nagłówka strony/aplikacji.

#### Checklist Implementacji

- [x] Utwórz folder `src/UI/Header/`
- [x] Dodaj `types.ts` z interfejsem `HeaderProps`:
  - `children?: ComponentChildren` (opcjonalne dzieci)
  - `title?: string` (opcjonalny tytuł)
  - `titleLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'` (poziom tytułu, domyślnie 'h1')
  - `className?: string` (dodatkowa klasa CSS)
  - `[key: string]: any` (dodatkowe props)
- [x] Zaimplementuj `Header.tsx`:
  - Użyj semantycznego elementu `<header>`
  - Dynamiczne tworzenie tytułu za pomocą `createElement`
  - Pełna dokumentacja TSDoc z przykładem użycia
  - Obsługa wszystkich props z `HeaderProps`
- [x] Dodaj style w `Header.scss`:
  - Responsywny design z zmiennymi z `src/index.scss`
  - Obsługa ciemnego/jasnego motywu
  - Media queries dla tablet, mobile i orientacji poziomej
  - Padding, background, border-radius, box-shadow
- [x] Napisz kompletne testy w `Header.test.tsx` (8 testów):
  - Renderowanie dzieci
  - Domyślna i customowa klasa CSS
  - Tytuł z domyślnym i customowym poziomem
  - Brak tytułu
  - Dodatkowe props przekazywane do root elementu
  - Złożone dzieci
- [x] Dodaj `index.ts` dla barrel export
- [x] Zaktualizuj `src/UI/index.ts`
- [x] Sprawdź build i testy

### Main

Główny komponent zawartości strony.

#### Checklist Implementacji

- [x] Utwórz folder `src/UI/Main/`
- [x] Dodaj `types.ts` z interfejsem `MainProps`:
  - `children?: ComponentChildren` (opcjonalne dzieci)
  - `className?: string` (dodatkowa klasa CSS)
  - `[key: string]: any` (dodatkowe props)
- [x] Zaimplementuj `Main.tsx`:
  - Użyj semantycznego elementu `<main>`
  - Pełna dokumentacja TSDoc z przykładem użycia
  - Obsługa wszystkich props z `MainProps`
- [x] Dodaj style w `Main.scss`:
  - Responsywny design z zmiennymi z `src/index.scss`
  - Obsługa ciemnego/jasnego motywu
  - Media queries dla tablet, mobile i orientacji poziomej
  - Padding, background, border-radius, box-shadow
- [x] Napisz kompletne testy w `Main.test.tsx` (6 testów):
  - Renderowanie dzieci
  - Domyślna i customowa klasa CSS
  - Dodatkowe props przekazywane do root elementu
  - Złożone dzieci
- [x] Dodaj `index.ts` dla barrel export
- [x] Zaktualizuj `src/UI/index.ts`
- [x] Sprawdź build i testy

### Article

Komponent dla sekcji artykułu/treści.

#### Checklist Implementacji

- [x] Utwórz folder `src/UI/Article/`
- [x] Dodaj `types.ts` z interfejsem `ArticleProps`:
  - `children: ComponentChildren` (wymagane dzieci)
  - `title?: string` (opcjonalny tytuł)
  - `titleLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'` (poziom tytułu, domyślnie 'h2')
  - `className?: string` (dodatkowa klasa CSS)
  - `[key: string]: any` (dodatkowe props)
- [x] Zaimplementuj `Article.tsx`:
  - Użyj semantycznego elementu `<article>`
  - Dynamiczne tworzenie tytułu za pomocą `createElement`
  - Pełna dokumentacja TSDoc z przykładem użycia
  - Obsługa wszystkich props z `ArticleProps`
- [x] Dodaj style w `Article.scss`:
  - `max-width: 800px` i `width: 100%` dla standardowej szerokości treści
  - `min-height` responsywny (400px desktop, 300px tablet, 250px mobile, 200px landscape)
  - `margin: auto` dla wyśrodkowania
  - Responsywny design z zmiennymi z `src/index.scss`
  - Obsługa ciemnego/jasnego motywu
  - Media queries dla tablet, mobile i orientacji poziomej
  - Padding, background, border-radius, box-shadow
- [x] Napisz kompletne testy w `Article.test.tsx` (8 testów):
  - Renderowanie dzieci
  - Domyślna i customowa klasa CSS
  - Tytuł z domyślnym i customowym poziomem
  - Brak tytułu
  - Dodatkowe props przekazywane do root elementu
  - Złożone dzieci
- [x] Dodaj `index.ts` dla barrel export
- [x] Zaktualizuj `src/UI/index.ts`
- [x] Sprawdź build i testy

### Footer

Komponent stopki strony/aplikacji.

#### Checklist Implementacji

- [x] Utwórz folder `src/UI/Footer/`
- [x] Dodaj `types.ts` z interfejsem `FooterProps`:
  - `children?: ComponentChildren` (opcjonalne dzieci)
  - `className?: string` (dodatkowa klasa CSS)
  - `[key: string]: any` (dodatkowe props)
- [x] Zaimplementuj `Footer.tsx`:
  - Użyj semantycznego elementu `<footer>`
  - Pełna dokumentacja TSDoc z przykładem użycia
  - Obsługa wszystkich props z `FooterProps`
- [x] Dodaj style w `Footer.scss`:
  - Responsywny design z zmiennymi z `src/index.scss`
  - Obsługa ciemnego/jasnego motywu
  - Media queries dla tablet, mobile i orientacji poziomej
  - Padding, background, border-radius, box-shadow
- [x] Napisz kompletne testy w `Footer.test.tsx` (6 testów):
  - Renderowanie dzieci
  - Domyślna i customowa klasa CSS
  - Dodatkowe props przekazywane do root elementu
  - Złożone dzieci
- [x] Dodaj `index.ts` dla barrel export
- [x] Zaktualizuj `src/UI/index.ts`
- [x] Sprawdź build i testy

### Section

Komponent dla sekcji treści.

#### Checklist Implementacji

- [x] Utwórz folder `src/UI/Section/`
- [x] Dodaj `types.ts` z interfejsem `SectionProps`:
  - `children?: ComponentChildren` (opcjonalne dzieci)
  - `className?: string` (dodatkowa klasa CSS)
  - `[key: string]: any` (dodatkowe props)
- [x] Zaimplementuj `Section.tsx`:
  - Użyj semantycznego elementu `<section>`
  - Pełna dokumentacja TSDoc z przykładem użycia
  - Obsługa wszystkich props z `SectionProps`
- [x] Dodaj style w `Section.scss`:
  - Responsywny design z zmiennymi z `src/index.scss`
  - Obsługa ciemnego/jasnego motywu
  - Media queries dla tablet, mobile i orientacji poziomej
  - Padding, background, border-radius, box-shadow
- [x] Napisz kompletne testy w `Section.test.tsx` (6 testów):
  - Renderowanie dzieci
  - Domyślna i customowa klasa CSS
  - Dodatkowe props przekazywane do root elementu
  - Złożone dzieci
- [x] Dodaj `index.ts` dla barrel export
- [x] Zaktualizuj `src/UI/index.ts`
- [x] Sprawdź build i testy

### Aside

Komponent dla zawartości pobocznej (sidebar).

#### Checklist Implementacji

- [x] Utwórz folder `src/UI/Aside/`
- [x] Dodaj `types.ts` z interfejsem `AsideProps`:
  - `children?: ComponentChildren` (opcjonalne dzieci)
  - `className?: string` (dodatkowa klasa CSS)
  - `[key: string]: any` (dodatkowe props)
- [x] Zaimplementuj `Aside.tsx`:
  - Użyj semantycznego elementu `<aside>`
  - Pełna dokumentacja TSDoc z przykładem użycia
  - Obsługa wszystkich props z `AsideProps`
- [x] Dodaj style w `Aside.scss`:
  - Szerokość responsywna (300px desktop, 250px tablet, 100% mobile)
  - Responsywny design z zmiennymi z `src/index.scss`
  - Obsługa ciemnego/jasnego motywu
  - Media queries dla tablet, mobile i orientacji poziomej
  - Padding, background, border-radius, box-shadow
- [x] Napisz kompletne testy w `Aside.test.tsx` (6 testów):
  - Renderowanie dzieci
  - Domyślna i customowa klasa CSS
  - Dodatkowe props przekazywane do root elementu
  - Złożone dzieci
- [x] Dodaj `index.ts` dla barrel export
- [x] Zaktualizuj `src/UI/index.ts`
- [x] Sprawdź build i testy

### Nav

Komponent nawigacji.

#### Checklist Implementacji

- [x] Utwórz folder `src/UI/Nav/`
- [x] Dodaj `types.ts` z interfejsem `NavProps`:
  - `children?: ComponentChildren` (opcjonalne dzieci)
  - `className?: string` (dodatkowa klasa CSS)
  - `[key: string]: any` (dodatkowe props)
- [x] Zaimplementuj `Nav.tsx`:
  - Użyj semantycznego elementu `<nav>`
  - Pełna dokumentacja TSDoc z przykładem użycia
  - Obsługa wszystkich props z `NavProps`
- [x] Dodaj style w `Nav.scss`:
  - Responsywny design z zmiennymi z `src/index.scss`
  - Obsługa ciemnego/jasnego motywu
  - Media queries dla tablet, mobile i orientacji poziomej
  - Padding, background, border-radius, box-shadow
- [x] Napisz kompletne testy w `Nav.test.tsx` (6 testów):
  - Renderowanie dzieci
  - Domyślna i customowa klasa CSS
  - Dodatkowe props przekazywane do root elementu
  - Złożone dzieci
- [x] Dodaj `index.ts` dla barrel export
- [x] Zaktualizuj `src/UI/index.ts`
- [x] Sprawdź build i testy

## Zasady Implementacji

### Ogólne Wymagania dla Wszystkich Komponentów Layout

- **Semantyczne HTML**: Każdy komponent używa odpowiedniego semantycznego elementu HTML
- **TypeScript**: Ścisłe typowanie z interfejsami w osobnych plikach `types.ts`
- **TSDoc**: Pełna dokumentacja dla wszystkich eksportowanych funkcji
- **Responsywność**: Media queries dla wszystkich breakpointów zdefiniowanych w projekcie
- **Motywy**: Obsługa ciemnego i jasnego motywu za pomocą zmiennych SCSS
- **Testowanie**: 100% pokrycie kodu testami jednostkowymi
- **Barrel Export**: Plik `index.ts` dla łatwego importowania
- **Integracja**: Dodanie do głównego pliku `src/UI/index.ts`

### Struktura Folderów

```text
src/UI/ComponentName/
├── index.ts           # Barrel export komponentu i typów
├── types.ts           # Definicje typów TypeScript
├── ComponentName.tsx  # Główny plik komponentu
├── ComponentName.scss # Style specyficzne dla komponentu
└── ComponentName.test.tsx # Testy jednostkowe
```

### Importy i Eksporty

- Importy zewnętrzne (biblioteki) na górze
- Importy wewnętrzne (komponenty, utils) poniżej
- Pusta linia między grupami importów
- Nazwane eksporty zamiast domyślnych

### Styling

- Używaj zmiennych SCSS z `src/index.scss`
- Sass color functions dla manipulacji kolorami
- Breakpointy: `$tablet`, `$small`, `@media (orientation: landscape)`
- BEM lub podobna metodologia nazewnictwa klas

### Testowanie

- Testing Library + Vitest
- Testuj zachowanie, nie implementację
- Mockuj zewnętrzne zależności
- Sprawdzaj obecność i brak elementów warunkowych
- Testuj przekazywanie props
