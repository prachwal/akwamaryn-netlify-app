# Tworzenie Komponentu UI

Kompletny przewodnik tworzenia komponentów UI zgodnie z zasadami projektu, na podstawie praktycznych przykładów i poprawek.

## Struktura Folderów Komponentu

Każdy komponent UI powinien mieć własną strukturę folderów w `src/UI/ComponentName/`:

```text
src/UI/ComponentName/
├── index.ts           # Barrel export komponentu i typów
├── types.ts           # Definicje typów TypeScript
├── ComponentName.tsx  # Główny plik komponentu
├── ComponentName.scss # Style specyficzne dla komponentu
└── ComponentName.test.tsx # Testy jednostkowe
```

## 1. Definicje Typów (types.ts)

Rozpocznij od osobnego pliku z typami:

```typescript
import { ComponentChildren } from 'preact';

/**
 * Props for the ComponentName component
 */
export interface ComponentNameProps {
  /** The content to be displayed inside the component */
  children: ComponentChildren;
  /** Optional title for the component */
  title?: string;
  /** Heading level for the title (h1-h6) */
  titleLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  /** Additional CSS class name */
  className?: string;
  /** Any other props to be passed to the root element */
  [key: string]: any;
}
```

## 2. Główny Komponent (ComponentName.tsx)

Implementacja komponentu z pełną dokumentacją TSDoc:

```typescript
import { createElement } from 'preact';

import './ComponentName.scss';
import type { ComponentNameProps } from './types';

/**
 * Component description
 *
 * @param props - The component props
 * @returns The rendered component
 *
 * @example
 * ```tsx
 * <ComponentName title="My Component" titleLevel="h3" className="custom-class">
 *   <p>Component content</p>
 * </ComponentName>
 * ```
 */
export function ComponentName({
  children,
  title,
  titleLevel = 'h2',
  className,
  ...rest
}: ComponentNameProps) {
  return (
    <section className={`component-name ${className || ''}`} {...rest}>
      {title && createElement(titleLevel, {}, title)}
      {children}
    </section>
  );
}
```

**Ważne uwagi:**

- Używaj `createElement` dla dynamicznych tagów HTML zamiast JSX z zmiennymi
- Importuj typy z osobnego pliku `types.ts`
- Dodawaj pustą linię między grupami importów
- Używaj destrukturyzacji props z domyślnymi wartościami

## 3. Style SCSS (ComponentName.scss)

Podstawowe style z konwencjami nazewnictwa, używające zmiennych i funkcji Sass z `src/index.scss`, dostosowane do motywów jasnego i ciemnego:

```scss
@use 'sass:color' as color;
@use '../../index.scss' as *;

// Przykład zmiennych kolorów z src/index.scss:
// $primary-color: #646cff;
// $dark-bg: #242424;
// $light-bg: #ffffff;
// $card-dark-bg: #2a2a2a;  // Dla kart w ciemnym motywie
// $card-light-bg: #fafafa; // Dla kart w jasnym motywie

.component-name {
  padding: 1rem;
  border: 1px solid color.scale($light-text, $lightness: -30%);
  border-radius: 8px;
  background-color: $card-dark-bg;
  box-shadow: 0 2px 4px color.change($dark-bg, $alpha: 0.1);
  margin: 1rem 0;

  h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-weight: bold;
  }
}

@media (prefers-color-scheme: light) {
  .component-name {
    background-color: $card-light-bg;
    border-color: color.scale($dark-text, $lightness: -30%);
    box-shadow: 0 2px 4px color.change($light-text, $alpha: 0.1);
  }
}

// Responsive design for different screen sizes
@media (max-width: $tablet) {
  .component-name {
    padding: 0.75rem;
    margin: 0.5rem 0;
    border-radius: 6px;
  }
}

@media (max-width: $small) {
  .component-name {
    padding: 0.5rem;
    margin: 0.25rem 0;
  }
}

// Orientation-specific adjustments
@media (orientation: landscape) and (max-height: 500px) {
  .component-name {
    padding: 0.5rem;
    margin: 0.25rem 0;
  }
}
```

## 4. Barrel Export (index.ts)

Ułatwia importowanie komponentu i typów:

```typescript
/**
 * ComponentName component barrel export
 */

// Main component
export { ComponentName } from './ComponentName';

// Types
export type { ComponentNameProps } from './types';
```

## 5. Testy Jednostkowe (ComponentName.test.tsx)

Kompletne testy z 100% pokryciem, używając Testing Library:

```typescript
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/preact';

import { ComponentName } from './ComponentName';

describe('ComponentName', () => {
  it('renders children correctly', () => {
    render(<ComponentName>Test content</ComponentName>);
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('renders with default className', () => {
    render(<ComponentName>Test content</ComponentName>);
    const section = screen.getByText('Test content').closest('section');
    expect(section).toHaveClass('component-name');
  });

  it('renders with custom className', () => {
    render(<ComponentName className="custom-class">Test content</ComponentName>);
    const section = screen.getByText('Test content').closest('section');
    expect(section).toHaveClass('component-name', 'custom-class');
  });

  it('renders title with default h2 level', () => {
    render(<ComponentName title="Test Title">Test content</ComponentName>);
    const title = screen.getByRole('heading', { level: 2 });
    expect(title).toHaveTextContent('Test Title');
  });

  it('renders title with custom level', () => {
    render(<ComponentName title="Test Title" titleLevel="h3">Test content</ComponentName>);
    const title = screen.getByRole('heading', { level: 3 });
    expect(title).toHaveTextContent('Test Title');
  });

  it('does not render title when not provided', () => {
    render(<ComponentName>Test content</ComponentName>);
    const headings = screen.queryAllByRole('heading');
    expect(headings).toHaveLength(0);
  });

  it('passes additional props to root element', () => {
    render(<ComponentName data-testid="custom-component" aria-label="Custom Component">Test content</ComponentName>);
    const section = screen.getByTestId('custom-component');
    expect(section).toHaveAttribute('aria-label', 'Custom Component');
  });

  it('renders complex children', () => {
    render(
      <ComponentName title="Complex Component">
        <div>Child 1</div>
        <p>Child 2</p>
      </ComponentName>
    );
    expect(screen.getByText('Child 1')).toBeInTheDocument();
    expect(screen.getByText('Child 2')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Complex Component');
  });
});
```

**Wskazówki testowania:**

- Używaj `closest('tag')` zamiast `getByRole('region')` dla elementów bez domyślnych ról ARIA
- Testuj wszystkie warianty props
- Sprawdzaj obecność i brak elementów warunkowych
- Testuj przekazywanie dodatkowych props

## 6. Integracja z Projektem

### Dodanie do głównego index UI (src/UI/index.ts)

```typescript
/**
 * UI Components barrel export
 */

// ComponentName component
export { ComponentName, type ComponentNameProps } from './ComponentName';
```

### Użycie w komponentach aplikacji

```typescript
import { ComponentName } from '@ui/ComponentName';

// W JSX
<ComponentName title="Example" className="my-style">
  Content
</ComponentName>
```

## 7. Checklist Tworzenia Komponentu

- [ ] Utwórz folder `src/UI/ComponentName/`
- [ ] Dodaj `types.ts` z definicjami interfejsów
- [ ] Zaimplementuj `ComponentName.tsx` z pełnym TSDoc
- [ ] Dodaj style w `ComponentName.scss`
- [ ] Napisz kompletne testy w `ComponentName.test.tsx`
- [ ] Dodaj `index.ts` dla barrel export
- [ ] Zaktualizuj `src/UI/index.ts`
- [ ] Sprawdź build i testy
- [ ] Zaktualizuj dokumentację jeśli potrzebne

## 8. Najlepsze Praktyki

### TypeScript

- Nigdy nie używaj `any` - używaj `unknown` lub ścisłych typów
- Definiuj props jako interface, nie type dla komponentów
- Używaj union types dla ograniczonych wartości (jak `titleLevel`)

### Dostępność

- Używaj semantycznych elementów HTML
- Dodawaj odpowiednie role ARIA gdy potrzebne
- Zapewnij hierarchię nagłówków

### Wydajność

- Używaj `memo()` dla komponentów renderujących się często
- Unikaj tworzenia nowych funkcji w render
- Optymalizuj re-rendery

### Testowanie

- 100% pokrycie kodu
- Testuj zachowanie, nie implementację
- Mockuj zewnętrzne zależności
- Używaj opisowych nazw testów

### Styling

- Używaj BEM lub podobnej metodologii nazewnictwa
- Unikaj głębokich selektorów
- Używaj zmiennych SCSS dla kolorów i rozmiarów

## Przykład Kompletnego Komponentu

Zobacz `src/UI/Card/` jako referencyjną implementację wszystkich powyższych zasad.
