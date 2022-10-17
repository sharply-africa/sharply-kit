import React__default from 'react';

interface PaginationProps {
    page?: number;
    onChange?: (page: number) => void;
    total?: number;
}
declare const Pagination: React__default.ForwardRefExoticComponent<PaginationProps & React__default.RefAttributes<unknown>>;

export { Pagination as default };
