import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';

import { useQueryString } from '../../providers/QueryStringProvider';

import { Container, SearchStyleProps } from './styles';

export interface SearchRefProps {
  setSearchValue?: (value: string) => void;
}

export interface SearchProps extends SearchStyleProps {
  forwardRef?: React.MutableRefObject<SearchRefProps>;
  onSearch?: (value: string) => void;
  debounce?: number;
  useQueryString?: boolean;
}

const SearchBar: React.FC<SearchProps> = ({
  width,
  height,
  top,
  left,
  forwardRef,
  onSearch,
  debounce,
  useQueryString: useQuery,
}) => {
  const { t } = useTranslation();
  const { getQueryParameter, setQueryParameter } = useQueryString();
  const [searchValue, setSearchValue] = useState(
    useQuery ? getQueryParameter('search') || '' : '',
  );
  const [searchTimeout, setSearchTimeout] = useState<NodeJS.Timeout>();

  useEffect(() => {
    if (useQuery) {
      onSearch?.(searchValue);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSearchDebounce = useCallback(
    (value: string) => {
      if (searchTimeout) {
        clearTimeout(searchTimeout);
      }
      const cb = () => {
        if (useQuery) {
          setQueryParameter('search', value || null);
        }
        onSearch?.(value);
      };
      if (!value) {
        cb();
        return;
      }
      setSearchTimeout(
        setTimeout(() => {
          cb();
        }, debounce ?? 0),
      );
    },
    [debounce, onSearch, searchTimeout, setQueryParameter, useQuery],
  );

  const setSearch = useCallback(
    (value: string) => {
      setSearchValue(value);
      onSearchDebounce(value);
    },
    [onSearchDebounce],
  );

  if (forwardRef?.current) {
    // eslint-disable-next-line no-param-reassign
    forwardRef.current = { setSearchValue: setSearch };
  }

  return (
    <Container
      className="no-user-select"
      width={width}
      height={height}
      top={top}
      left={left}
    >
      <input
        id="search-input"
        type="search"
        placeholder={t('search')}
        value={searchValue}
        onChange={(evt) => {
          evt.stopPropagation();
          evt.preventDefault();
          setSearch(evt.target.value);
        }}
      />
      {!searchValue
        ? !searchValue && <BiSearch cursor="pointer" />
        : searchValue && (
          <AiOutlineCloseCircle
            onClick={() => {
              setSearch('');
            }}
            cursor="pointer"
          />
        )}
    </Container>
  );
};

export default SearchBar;
