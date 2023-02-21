import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CardFooter from './CardFooter';
import { acceptMovie } from '../../actions/actions';

jest.mock('../../actions/actions', () => ({
  acceptMovie: jest.fn().mockResolvedValue(undefined),
  rejectMovie: jest.fn().mockResolvedValue(undefined),
}));

describe('CardFooter', () => {
  it('should call acceptMovie when accept button is clicked', async () => {
    const onContentChange = jest.fn().mockResolvedValue(undefined);
    const id = '1and3011';

    const { getByTestId } = render(
        <CardFooter id={id} onContentChange={onContentChange} />
    );

    const acceptButton = getByTestId('accept-button');
    fireEvent.click(acceptButton);

    expect(acceptMovie).toHaveBeenCalledWith(id);
  });
});