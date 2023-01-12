import React, { forwardRef } from 'react';
import { Flex } from 'src/components/Flex';
import { Text } from 'src/components/Text';
import { Select } from 'src/components/Select';
import { CaretLeft, CaretRight } from 'src/components/Icons';
import { Control, Controls, Wrapper } from './StyledComponents';

export interface PaginationProps {
  page?: number;
  onChange?: (page: number) => void;
  total?: number;
}

const Pagination = forwardRef(
  ({ page = 1, onChange = () => {}, total = 0 }: PaginationProps, ref) => {
    const onSelectChange = (e) => {
      const newPage = +e.target.value;
      onChange(newPage);
    };

    const goToPrev = () => {
      if (page > 1) {
        onChange(+page - 1);
      }
    };

    const goToNext = () => {
      if (page < total) {
        onChange(+page + 1);
      }
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
            {Array.from({ length: total }, (_, i) => i + 1).map((x) => (
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
