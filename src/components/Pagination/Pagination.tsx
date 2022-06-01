import React, { forwardRef, useMemo, useState } from 'react';
import { Flex } from '~src/components/Flex';
import { Text } from '~src/components/Text';
import { Select } from '~src/components/Select';
import CaretLeft from '~src/assets/icons/caret-left.svg';
import CaretRight from '~src/assets/icons/caret-right.svg';
import { useDidUpdate } from '~src/hooks/useDidUpdate';
import { Control, Controls, Wrapper } from './StyledComponents';

interface PaginationProps {
  initialPage?: number;
  onChange?: (page: number) => void;
  total?: number;
}

const Pagination = forwardRef(
  (
    { initialPage = 1, onChange = () => {}, total = 0 }: PaginationProps,
    ref,
  ) => {
    const [page, setPage] = useState(initialPage);

    useDidUpdate(() => {
      onChange(page);
    }, [page]);

    const pages = useMemo(
      () =>
        Array.from({ length: total + 1 })
          .map((_, i) => i)
          .filter((x) => x > 0),
      [total],
    );

    const onSelectChange = (e) => {
      setPage(+e.target.value);
    };

    const goToPrev = () => {
      if (page > 1) setPage((v) => +v - 1);
    };

    const goToNext = () => {
      if (page < total) setPage((v) => +v + 1);
    };

    if (!total) return null;

    return (
      <Wrapper ref={ref}>
        <Flex alignItems="center">
          <Select
            minWidth="8rem"
            mr={2}
            onChange={onSelectChange}
            py="0.9rem"
            value={page}
          >
            {pages.map((x) => (
              <option key={x} value={x}>
                {x}
              </option>
            ))}
          </Select>

          <Text flexShrink={0}>of {total}</Text>
        </Flex>

        <Controls>
          <Control disabled={page < 2} onClick={goToPrev}>
            <CaretLeft />
          </Control>

          <Control disabled={page > total - 1} onClick={goToNext} ml="-4px">
            <CaretRight />
          </Control>
        </Controls>
      </Wrapper>
    );
  },
);

export default Pagination;
