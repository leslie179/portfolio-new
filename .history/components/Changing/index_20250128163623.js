

1 of 2 errors
Next.js (15.1.4) out of date (learn more)

Unhandled Runtime Error

ReferenceError: timeout is not defined

Source
components\Changing\index.js (37:13) @ Changing.useEffect

  35 |         return () => {
  36 |             clearInterval(interval);
> 37 |             if (timeout) clearTimeout(timeout); // Clear timeout if set
     |             ^
  38 |         };
  39 |     }, [currentSlide]);
  40 |
Show ignored frames