'use client';

import { useRouter, useSearchParams } from 'next/navigation';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Checkbox } from '@/components/ui/checkbox';

const filters = [
  {
    id: 'category',
    name: 'Category',
    options: [
      { value: 'phones', label: 'Phones' },
      { value: 'smartwatches', label: 'Smartwatches' },
      { value: 'tablets', label: 'Tablets' }
    ],
  },
  {
    id: 'brand',
    name: 'Brand',
    options: [
      { value: 'apple', label: 'Apple' },
      { value: 'samsung', label: 'Samsung' },
      { value: 'google', lable: 'Google' }
    ],
  },
  {
    id: 'color',
    name: 'Color',
    options: [
      { value: 'space_black', label: 'Space Black' },
      { value: 'silver', label: 'Silver' },
      { value: 'gold', label: 'Gold' },
      { value: 'deep_purple', label: 'Deep Purple' },
      { value: 'midnight', label: 'Midnight' },
      { value: 'starlight', label: 'Starlight' },
      { value: 'purple', label: 'Purple' },
      { value: 'blue', label: 'Blue' },
      { value: 'red', label: 'Red' },
      { value: 'yellow', label: 'Yellow' },
      { value: 'orange', label: 'Orange' },
      { value: 'green', label: 'Green' },
      { value: 'phantom_black', label: 'Phantom Black' },
      { value: 'cream', label: 'Cream' },
      { value: 'lavender', label: 'Lavender' },
      { value: 'graphite', label: 'Graphite' },
      { value: 'icy_blue', label: 'Icy Blue' },
      { value: 'gray', label: 'Gray' },
      { value: 'mint', label: 'Mint' },
      { value: 'beige', label: 'Beige' }
    ],
  },
];

export function ProductFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Created searchValues so that we can turn the values into an array to see if the checkbox is checked or not
  // and when we refresh the page we still have the checkbox and the url with the route pointed to the selected option in the filter
  const searchValues = Array.from(searchParams.entries());

  return (
    <form className="sticky top-20">
      <h3 className="sr-only">Categories</h3>

      {filters.map((section, i) => (
        <Accordion key={i} type="single" collapsible>
          <AccordionItem value={`item-${i}`}>
            <AccordionTrigger>
              <span>
                {section.name}{' '}
                <span className="ml-1 text-xs font-extrabold uppercase text-gray-400">
                  {searchParams.get(section.id) ? `(${searchParams.get(section.id)})` : ''}
                </span>
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                {section.options.map((option, optionIndex) => (
                  <div
                    key={option.value}
                    className="flex items-center space-x-2"
                  >
                    <Checkbox
                      id={`filter-${section.id}-${optionIndex}`}

                      // Checked with the values transformed into array and checking if they match the value the user selected in the filter options
                      // to make it possible to refresh and the values to be still checked when the page is reloaded
                      checked={searchValues.some(([ key, value ]) => key === section.id && value === option.value)}
                      onClick={(event) => {
                        const params = new URLSearchParams(searchParams);
                        const checked = event.currentTarget.dataset.state === 'checked';
                        checked ? params.delete(section.id) : params.set(section.id, option.value);
                        router.replace(`/?${params.toString()}`);
                      }}
                    />
                    <label
                      htmlFor={`filter-${section.id}-${optionIndex}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </form>
  );
}
