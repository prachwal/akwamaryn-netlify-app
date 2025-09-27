# Komponenty Data/Layout

Lista komponentów UI odpowiedzialnych za tworzenie strukturalnych układów danych zgodnie z zasadami projektu. Każdy komponent zawiera pełną checklistę implementacyjną przygotowaną do implementacji.

## Podsumowanie Statusu

**Wszystkie komponenty (9/9)**: ⏳ Gotowy do implementacji

- **Komponenty Kontenerów (4)**: Container, Grid, Row, Column
- **Komponenty Grupowania (3)**: Group, Stack, Divider
- **Komponenty Zaawansowane (2)**: Masonry, AspectRatio

## Komponenty Kontenerów

### Container

**Status**: ⏳ Gotowy do implementacji

Główny komponent kontenera ograniczający maksymalną szerokość i wyśrodkowujący zawartość.

#### Checklist Implementacji Container

- [ ] Utwórz folder `src/UI/layout/Container/`
- [ ] Dodaj `types.ts` z interfejsem `ContainerProps`:
  - `children?: ComponentChildren` (opcjonalne dzieci)
  - `maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full'` (maksymalna szerokość, domyślnie 'lg')
  - `padding?: 'none' | 'sm' | 'md' | 'lg'` (padding wewnętrzny, domyślnie 'md')
  - `className?: string` (dodatkowa klasa CSS)
  - `[key: string]: any` (dodatkowe props)
- [ ] Zaimplementuj `Container.tsx`:
  - Użyj elementu `<div>` z klasą `container`
  - Pełna dokumentacja TSDoc z przykładem użycia
  - Obsługa wszystkich props z `ContainerProps`
  - Dynamiczne klasy CSS na podstawie props
- [ ] Dodaj style w `Container.scss`:
  - `max-width` na podstawie rozmiaru (sm: 640px, md: 768px, lg: 1024px, xl: 1280px, full: 100%)
  - `margin: 0 auto` dla wyśrodkowania
  - Responsywny padding z zmiennymi z `src/index.scss`
  - Obsługa ciemnego/jasnego motywu
  - Media queries dla tablet, mobile i orientacji poziomej
- [ ] Napisz kompletne testy w `Container.test.tsx` (8 testów):
  - Renderowanie dzieci
  - Domyślna i customowa klasa CSS
  - Różne rozmiary maxWidth
  - Różne poziomy padding
  - Dodatkowe props przekazywane do root elementu
  - Złożone dzieci
- [ ] Dodaj `index.ts` dla barrel export
- [ ] Zaktualizuj `src/UI/index.ts`
- [ ] Sprawdź build i testy

### Grid

**Status**: ⏳ Gotowy do implementacji

Komponent systemu siatki CSS Grid dla tworzenia responsywnych układów.

#### Checklist Implementacji Grid

- [ ] Utwórz folder `src/UI/layout/Grid/`
- [ ] Dodaj `types.ts` z interfejsem `GridProps`:
  - `children?: ComponentChildren` (opcjonalne dzieci)
  - `columns?: number | string` (liczba kolumn lub template, domyślnie 12)
  - `gap?: 'none' | 'sm' | 'md' | 'lg' | 'xl'` (odstęp między elementami, domyślnie 'md')
  - `alignItems?: 'start' | 'center' | 'end' | 'stretch'` (wyrównanie w pionie)
  - `justifyItems?: 'start' | 'center' | 'end' | 'stretch'` (wyrównanie w poziomie)
  - `className?: string` (dodatkowa klasa CSS)
  - `[key: string]: any` (dodatkowe props)
- [ ] Zaimplementuj `Grid.tsx`:
  - Użyj elementu `<div>` z klasą `grid`
  - `display: grid` w CSS
  - Dynamiczne właściwości CSS Grid na podstawie props
  - Pełna dokumentacja TSDoc z przykładem użycia
  - Obsługa wszystkich props z `GridProps`
- [ ] Dodaj style w `Grid.scss`:
  - `display: grid`
  - Dynamiczne `grid-template-columns` na podstawie props
  - Responsywny `gap` z predefiniowanymi wartościami
  - `align-items` i `justify-items` na podstawie props
  - Obsługa ciemnego/jasnego motywu
  - Media queries dla tablet, mobile i orientacji poziomej
- [ ] Napisz kompletne testy w `Grid.test.tsx` (10 testów):
  - Renderowanie dzieci
  - Domyślna i customowa klasa CSS
  - Różne konfiguracje kolumn
  - Różne poziomy gap
  - Wyrównanie alignItems i justifyItems
  - Dodatkowe props przekazywane do root elementu
  - Złożone dzieci
- [ ] Dodaj `index.ts` dla barrel export
- [ ] Zaktualizuj `src/UI/index.ts`
- [ ] Sprawdź build i testy

### Row

**Status**: ⏳ Gotowy do implementacji

Komponent wiersza dla systemu siatki (flexbox-based).

#### Checklist Implementacji Row

- [ ] Utwórz folder `src/UI/layout/Row/`
- [ ] Dodaj `types.ts` z interfejsem `RowProps`:
  - `children?: ComponentChildren` (opcjonalne dzieci)
  - `align?: 'start' | 'center' | 'end' | 'stretch'` (wyrównanie w pionie)
  - `justify?: 'start' | 'center' | 'end' | 'between' | 'around'` (rozłożenie w poziomie)
  - `gap?: 'none' | 'sm' | 'md' | 'lg' | 'xl'` (odstęp między elementami)
  - `wrap?: boolean` (czy elementy mogą się zawijać, domyślnie true)
  - `className?: string` (dodatkowa klasa CSS)
  - `[key: string]: any` (dodatkowe props)
- [ ] Zaimplementuj `Row.tsx`:
  - Użyj elementu `<div>` z klasą `row`
  - `display: flex` w CSS
  - Dynamiczne właściwości Flexbox na podstawie props
  - Pełna dokumentacja TSDoc z przykładem użycia
  - Obsługa wszystkich props z `RowProps`
- [ ] Dodaj style w `Row.scss`:
  - `display: flex`
  - Dynamiczne `align-items`, `justify-content`, `gap`
  - `flex-wrap` na podstawie prop wrap
  - Responsywny design z zmiennymi z `src/index.scss`
  - Obsługa ciemnego/jasnego motywu
  - Media queries dla tablet, mobile i orientacji poziomej
- [ ] Napisz kompletne testy w `Row.test.tsx` (10 testów):
  - Renderowanie dzieci
  - Domyślna i customowa klasa CSS
  - Różne opcje align i justify
  - Różne poziomy gap
  - Wrap behavior
  - Dodatkowe props przekazywane do root elementu
  - Złożone dzieci
- [ ] Dodaj `index.ts` dla barrel export
- [ ] Zaktualizuj `src/UI/index.ts`
- [ ] Sprawdź build i testy

### Column

**Status**: ⏳ Gotowy do implementacji

Komponent kolumny dla systemu siatki z szerokościami responsywnymi.

#### Checklist Implementacji Column

- [ ] Utwórz folder `src/UI/layout/Column/`
- [ ] Dodaj `types.ts` z interfejsem `ColumnProps`:
  - `children?: ComponentChildren` (opcjonalne dzieci)
  - `span?: number` (szerokość w jednostkach siatki, 1-12)
  - `offset?: number` (przesunięcie w jednostkach siatki, 0-11)
  - `order?: number` (kolejność wyświetlania)
  - `xs?: number` (szerokość na mobile, 1-12)
  - `sm?: number` (szerokość na tablet, 1-12)
  - `md?: number` (szerokość na desktop, 1-12)
  - `lg?: number` (szerokość na large desktop, 1-12)
  - `className?: string` (dodatkowa klasa CSS)
  - `[key: string]: any` (dodatkowe props)
- [ ] Zaimplementuj `Column.tsx`:
  - Użyj elementu `<div>` z klasą `column`
  - Dynamiczne klasy CSS na podstawie props responsywnych
  - Pełna dokumentacja TSDoc z przykładem użycia
  - Obsługa wszystkich props z `ColumnProps`
- [ ] Dodaj style w `Column.scss`:
  - Flexbox properties dla szerokości kolumn
  - Media queries dla różnych breakpointów (xs, sm, md, lg)
  - `flex-basis`, `max-width` na podstawie span
  - `margin-left` dla offset
  - `order` dla zmiany kolejności
  - Responsywny design z zmiennymi z `src/index.scss`
  - Obsługa ciemnego/jasnego motywu
- [ ] Napisz kompletne testy w `Column.test.tsx` (12 testów):
  - Renderowanie dzieci
  - Domyślna i customowa klasa CSS
  - Różne wartości span
  - Offset behavior
  - Order property
  - Responsywne breakpointy (xs, sm, md, lg)
  - Dodatkowe props przekazywane do root elementu
  - Złożone dzieci
- [ ] Dodaj `index.ts` dla barrel export
- [ ] Zaktualizuj `src/UI/index.ts`
- [ ] Sprawdź build i testy

## Komponenty Grupowania

### Group

**Status**: ⏳ Gotowy do implementacji

Komponent do grupowania powiązanych elementów z wspólnym tłem i obramowaniem.

#### Checklist Implementacji Group

- [ ] Utwórz folder `src/UI/layout/Group/`
- [ ] Dodaj `types.ts` z interfejsem `GroupProps`:
  - `children?: ComponentChildren` (opcjonalne dzieci)
  - `variant?: 'default' | 'outlined' | 'filled'` (styl grupy, domyślnie 'default')
  - `spacing?: 'none' | 'sm' | 'md' | 'lg'` (odstęp między elementami, domyślnie 'md')
  - `direction?: 'horizontal' | 'vertical'` (kierunek układu, domyślnie 'vertical')
  - `className?: string` (dodatkowa klasa CSS)
  - `[key: string]: any` (dodatkowe props)
- [ ] Zaimplementuj `Group.tsx`:
  - Użyj elementu `<div>` z klasą `group`
  - Dynamiczne klasy CSS na podstawie variant i direction
  - Pełna dokumentacja TSDoc z przykładem użycia
  - Obsługa wszystkich props z `GroupProps`
- [ ] Dodaj style w `Group.scss`:
  - Background i border na podstawie variant
  - Flexbox dla direction (row/column)
  - Gap na podstawie spacing
  - Border-radius i box-shadow
  - Responsywny design z zmiennymi z `src/index.scss`
  - Obsługa ciemnego/jasnego motywu
  - Media queries dla tablet, mobile i orientacji poziomej
- [ ] Napisz kompletne testy w `Group.test.tsx` (10 testów):
  - Renderowanie dzieci
  - Domyślna i customowa klasa CSS
  - Różne varianty (default, outlined, filled)
  - Różne spacing
  - Direction horizontal/vertical
  - Dodatkowe props przekazywane do root elementu
  - Złożone dzieci
- [ ] Dodaj `index.ts` dla barrel export
- [ ] Zaktualizuj `src/UI/layout/index.ts`
- [ ] Zaktualizuj `src/UI/index.ts`
- [ ] Sprawdź build i testy

### Stack

**Status**: ⏳ Gotowy do implementacji

Komponent do układania elementów w stosie (pionowo) z kontrolowanymi odstępami.

#### Checklist Implementacji Stack

- [ ] Utwórz folder `src/UI/layout/Stack/`
- [ ] Dodaj `types.ts` z interfejsem `StackProps`:
  - `children?: ComponentChildren` (opcjonalne dzieci)
  - `spacing?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'` (odstęp między elementami, domyślnie 'md')
  - `align?: 'start' | 'center' | 'end' | 'stretch'` (wyrównanie w poziomie)
  - `justify?: 'start' | 'center' | 'end' | 'between' | 'around'` (rozłożenie w pionie)
  - `className?: string` (dodatkowa klasa CSS)
  - `[key: string]: any` (dodatkowe props)
- [ ] Zaimplementuj `Stack.tsx`:
  - Użyj elementu `<div>` z klasą `stack`
  - `display: flex; flex-direction: column`
  - Dynamiczne właściwości CSS na podstawie props
  - Pełna dokumentacja TSDoc z przykładem użycia
  - Obsługa wszystkich props z `StackProps`
- [ ] Dodaj style w `Stack.scss`:
  - `display: flex; flex-direction: column`
  - Dynamiczne `gap`, `align-items`, `justify-content`
  - Responsywny design z zmiennymi z `src/index.scss`
  - Obsługa ciemnego/jasnego motywu
  - Media queries dla tablet, mobile i orientacji poziomej
- [ ] Napisz kompletne testy w `Stack.test.tsx` (10 testów):
  - Renderowanie dzieci
  - Domyślna i customowa klasa CSS
  - Różne poziomy spacing
  - Wyrównanie align i justify
  - Dodatkowe props przekazywane do root elementu
  - Złożone dzieci
- [ ] Dodaj `index.ts` dla barrel export
- [ ] Zaktualizuj `src/UI/index.ts`
- [ ] Sprawdź build i testy

### Divider

**Status**: ⏳ Gotowy do implementacji

Komponent separatora/dividera do oddzielania sekcji treści.

#### Checklist Implementacji Divider

- [ ] Utwórz folder `src/UI/layout/Divider/`
- [ ] Dodaj `types.ts` z interfejsem `DividerProps`:
  - `orientation?: 'horizontal' | 'vertical'` (orientacja linii, domyślnie 'horizontal')
  - `variant?: 'solid' | 'dashed' | 'dotted'` (styl linii, domyślnie 'solid')
  - `thickness?: 'thin' | 'medium' | 'thick'` (grubość linii, domyślnie 'medium')
  - `color?: 'default' | 'muted' | 'accent'` (kolor linii, domyślnie 'default')
  - `className?: string` (dodatkowa klasa CSS)
  - `[key: string]: any` (dodatkowe props)
- [ ] Zaimplementuj `Divider.tsx`:
  - Użyj elementu `<hr>` dla horizontal lub `<div>` dla vertical
  - Dynamiczne klasy CSS na podstawie wszystkich props
  - Pełna dokumentacja TSDoc z przykładem użycia
  - Obsługa wszystkich props z `DividerProps`
- [ ] Dodaj style w `Divider.scss`:
  - `border: none` z customowymi border properties
  - Dynamiczne `border-top/bottom/left/right` na podstawie orientation
  - `border-style`, `border-width`, `border-color` na podstawie props
  - Responsywny design z zmiennymi z `src/index.scss`
  - Obsługa ciemnego/jasnego motywu
  - Media queries dla tablet, mobile i orientacji poziomej
- [ ] Napisz kompletne testy w `Divider.test.tsx` (10 testów):
  - Renderowanie bez dzieci (Divider nie ma children)
  - Domyślna i customowa klasa CSS
  - Orientation horizontal/vertical
  - Różne varianty (solid, dashed, dotted)
  - Różne thickness
  - Różne colors
  - Dodatkowe props przekazywane do root elementu
- [ ] Dodaj `index.ts` dla barrel export
- [ ] Zaktualizuj `src/UI/index.ts`
- [ ] Sprawdź build i testy

## Komponenty Zaawansowane

### Masonry

**Status**: ⏳ Gotowy do implementacji

Komponent do tworzenia układów typu masonry (jak Pinterest) z dynamiczną wysokością kolumn.

#### Checklist Implementacji Masonry

- [ ] Utwórz folder `src/UI/layout/Masonry/`
- [ ] Dodaj `types.ts` z interfejsem `MasonryProps`:
  - `children?: ComponentChildren` (opcjonalne dzieci)
  - `columns?: number` (liczba kolumn, domyślnie 3)
  - `gap?: 'sm' | 'md' | 'lg'` (odstęp między elementami, domyślnie 'md')
  - `responsive?: boolean` (czy responsywny, domyślnie true)
  - `className?: string` (dodatkowa klasa CSS)
  - `[key: string]: any` (dodatkowe props)
- [ ] Zaimplementuj `Masonry.tsx`:
  - Użyj CSS columns lub JavaScript do rozmieszczenia
  - Dynamiczne klasy CSS na podstawie props
  - Pełna dokumentacja TSDoc z przykładem użycia
  - Obsługa wszystkich props z `MasonryProps`
- [ ] Dodaj style w `Masonry.scss`:
  - CSS `columns` property dla masonry layout
  - `column-gap` na podstawie gap
  - Media queries dla responsywności
  - Break-inside: avoid dla dzieci
  - Responsywny design z zmiennymi z `src/index.scss`
  - Obsługa ciemnego/jasnego motywu
- [ ] Napisz kompletne testy w `Masonry.test.tsx` (8 testów):
  - Renderowanie dzieci
  - Domyślna i customowa klasa CSS
  - Różne liczby kolumn
  - Różne gap
  - Responsive behavior
  - Dodatkowe props przekazywane do root elementu
  - Złożone dzieci
- [ ] Dodaj `index.ts` dla barrel export
- [ ] Zaktualizuj `src/UI/index.ts`
- [ ] Sprawdź build i testy

### AspectRatio

**Status**: ⏳ Gotowy do implementacji

Komponent do utrzymania proporcji elementów (np. 16:9 dla wideo).

#### Checklist Implementacji AspectRatio

- [ ] Utwórz folder `src/UI/layout/AspectRatio/`
- [ ] Dodaj `types.ts` z interfejsem `AspectRatioProps`:
  - `children?: ComponentChildren` (opcjonalne dzieci)
  - `ratio?: number` (proporcje, np. 16/9 = 1.777, domyślnie 1)
  - `className?: string` (dodatkowa klasa CSS)
  - `[key: string]: any` (dodatkowe props)
- [ ] Zaimplementuj `AspectRatio.tsx`:
  - Użyj CSS aspect-ratio lub padding-bottom hack
  - Container z względnymi proporcjami
  - Pełna dokumentacja TSDoc z przykładem użycia
  - Obsługa wszystkich props z `AspectRatioProps`
- [ ] Dodaj style w `AspectRatio.scss`:
  - `position: relative`
  - `aspect-ratio` CSS property lub padding-bottom
  - Dzieci z `position: absolute; inset: 0`
  - Responsywny design z zmiennymi z `src/index.scss`
  - Obsługa ciemnego/jasnego motywu
- [ ] Napisz kompletne testy w `AspectRatio.test.tsx` (8 testów):
  - Renderowanie dzieci
  - Domyślna i customowa klasa CSS
  - Różne ratio
  - Dodatkowe props przekazywane do root elementu
  - Złożone dzieci
- [ ] Dodaj `index.ts` dla barrel export
- [ ] Zaktualizuj `src/UI/index.ts`
- [ ] Sprawdź build i testy

## Zasady Implementacji

### Ogólne Wymagania dla Wszystkich Komponentów Data

- **Strukturalne CSS**: Komponenty używają nowoczesnych właściwości CSS (Grid, Flexbox, aspect-ratio)
- **TypeScript**: Ścisłe typowanie z interfejsami w osobnych plikach `types.ts`
- **TSDoc**: Pełna dokumentacja dla wszystkich eksportowanych funkcji
- **Responsywność**: Media queries dla wszystkich breakpointów zdefiniowanych w projekcie
- **Motywy**: Obsługa ciemnego i jasnego motywu za pomocą zmiennych SCSS
- **Testowanie**: 100% pokrycie kodu testami jednostkowymi
- **Barrel Export**: Plik `index.ts` dla łatwego importowania
- **Integracja**: Dodanie do głównego pliku `src/UI/index.ts`

### Struktura Folderów

Wszystkie komponenty data/layout będą zorganizowane w podfolderze `src/UI/layout/` dla lepszej organizacji:

```text
src/UI/layout/
├── ComponentName/
│   ├── index.ts           # Barrel export komponentu i typów
│   ├── types.ts           # Definicje typów TypeScript
│   ├── ComponentName.tsx  # Główny plik komponentu
│   ├── ComponentName.scss # Style specyficzne dla komponentu
│   └── ComponentName.test.tsx # Testy jednostkowe
└── index.ts               # Główny barrel export wszystkich komponentów layout
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
- Nowoczesne właściwości CSS (aspect-ratio, gap, etc.)

### Testowanie

- Testing Library + Vitest
- Testuj zachowanie, nie implementację
- Mockuj zewnętrzne zależności
- Sprawdzaj obecność i brak elementów warunkowych
- Testuj przekazywanie props
- Testuj responsywne breakpointy

### Przykłady Użycia

```tsx
// Grid system
<Grid columns={12} gap="md">
  <Column span={4}>Column 1</Column>
  <Column span={4}>Column 2</Column>
  <Column span={4}>Column 3</Column>
</Grid>

// Container with max width
<Container maxWidth="lg" padding="lg">
  <h1>Content</h1>
</Container>

// Stack with spacing
<Stack spacing="lg" align="center">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Stack>

// Aspect ratio for media
<AspectRatio ratio={16/9}>
  <img src="video-thumbnail.jpg" alt="Video" />
</AspectRatio>
