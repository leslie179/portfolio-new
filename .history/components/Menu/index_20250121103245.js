

1 of 1 error
Next.js (15.1.4) out of date (learn more)
Server Error

ReferenceError: window is not defined

This error happened while generating the page. Any console logs will be displayed in the terminal window.
Source
components\Menu\index.js (5:56) @ window

  3 |
  4 | const Menu = () => {
> 5 |     const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
    |                                                        ^
  6 |     const [visible, setVisible] = useState(true);
  7 |
  8 |     useEffect(() => {
Show ignored frames