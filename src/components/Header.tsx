import { isEqual } from "lodash";
import { memo } from "react";

function HeaderComponent() {
  return (
    <span>
      Watch<p>Me</p>
    </span>
  );
}

export const Header = memo(HeaderComponent, (prevProps, NextProps) => {
  return isEqual(prevProps, NextProps);
});
