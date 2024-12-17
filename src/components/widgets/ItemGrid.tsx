import { twMerge } from 'tailwind-merge';
import { IconCheck } from '@tabler/icons-react';
import { ItemGrid as ItemGridType } from '~/shared/types';
// import CTA from '../atoms/CTA';

const ItemGrid = ({
  id,
  items,
  columns = 2,
  defaultColumns,
  defaultIcon: DefaultIcon = IconCheck,
  containerClass,
  panelClass,
  iconClass,
  titleClass,
  descriptionClass,
  actionClass,
}: ItemGridType) => {
  const getColumns = () => {
    if (defaultColumns) {
      return defaultColumns;
    }
    return columns === 1 ? 'md:grid-cols-1' : columns === 2 ? 'md:grid-cols-2' : columns === 3 ? 'md:grid-cols-3' : '';
  };

  return (
    <div
      className={twMerge(
        `grid mx-auto gap-8 md:gap-y-12 ${getColumns()} items-start`,
        containerClass?.includes('grid-cols-') ? containerClass : `${containerClass} ${getColumns()}`
      )}
    >
      {/* {items.map(({ title, description, iconName, callToAction }, index) => (
        <div key={id ? `item-${id}-${index}` : `item-grid-${index}`}>
          <div className={(twMerge('flex flex-row max-w-md'), panelClass)}>
            <div className="flex justify-center">
              {iconName ? (
                <div className={twMerge('flex items-center justify-center w-12 h-12 rounded-md text-white bg-primary-600', iconClass)}>
                  <DefaultIcon className="w-6 h-6" />
                </div>
              ) : null}
            </div>
            <div className="mt-0.5 ml-4">
              {title && (
                <h3 className={twMerge('text-xl font-semibold', titleClass)}>
                  {title}
                </h3>
              )}
              {description && (
                <p
                  className={twMerge(`text-muted mt-2`, descriptionClass)}
                  dangerouslySetInnerHTML={{ __html: description.toString() }}
                />
              )}
              {callToAction && (
                <CTA callToAction={callToAction} containerClass={actionClass} />
              )}
            </div>
          </div>
        </div>
      ))} */}
    </div>
  );
};

export default ItemGrid;
