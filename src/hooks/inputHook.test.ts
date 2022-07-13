import { renderHook, act } from '@testing-library/react-hooks';
import useInput from './inputHook';

describe('useInput hook', () => {
  test('should update input value', () => {
    const { result } = renderHook(() => useInput(''));
    const validValue = 'Some text';

    act(() => {
      result.current.value = validValue;
    });

    expect(result.current.value).toEqual(validValue);
  });

  test('should generate error message', () => {
    const { result } = renderHook(() => useInput(''));
    const invalidValue = 'a';

    act(() => {
      result.current.value = invalidValue;
    });

    expect(result.current.error).toEqual('must be at least 3 characters');
  });

  
});
