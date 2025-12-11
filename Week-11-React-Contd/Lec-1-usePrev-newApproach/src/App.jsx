import { useState } from 'react'
import './App.css'
import usePrev from '../../Lec-1-usePrev-hook/Hooks/usePrev';

function App() {
  const [state,setState] = useState(0);
  const prev = usePrev(0);

  return(
    <div>
      <p>Value is : {state}</p>
      <br />
      <button onClick={()=>setState(curr=>curr+1)}>Increase</button>
      {/* used implicit return */}
      <br />
      <p>Previous val : {prev}</p>
    </div>
  )
}

export default App


/*

RECOMMENDED USING CLASSICAL usePrev IN 98% CASES

The “old” value returned by usePrevious refers to the value from the previous render, not necessarily the previous different value. If the component re-renders even without the tracked value changing, usePrevious will still update its ref — so “previous” becomes the same as “current.” That may break logic if you expect to detect changes only when the tracked value changes. 
giacomocerquone.com

Because of how useEffect works — it runs after render — the returned value is always “stale” (i.e. from before this render). If you rely on it inside the same render to do comparisons or logic, you might be comparing with outdated data. 
giacomocerquone.com
+1

If your component re-renders for reasons other than the watched value changing (e.g. parent re-renders, state changes elsewhere, context updates), usePrevious might give misleading “previous” value — which may cause bugs especially when doing deeper comparisons or logic dependent on actual changes.


“For ‘old’ we don’t really mean the ‘previous’ value, but the value from the previous rendering.”


If you only need a rough “previous value” — the classic usePrevious is fine.
IF YOU ONLY NEED A ROUGHT "previous value"- (e.g. for logging, simple comparisons) THE CLASSIC USEPREV IS FINE.IN 98% cases the "classical" ONE IS FINE.

*/