import { BeginningConsonantActivity } from './activities/BeginningConsonantActivity.jsx';
import { MatchWordActivity } from './activities/MatchWordActivity.jsx';
import { ParentNote } from './activities/ParentNote.jsx';
import { ReadingCheckActivity } from './activities/ReadingCheckActivity.jsx';
import { TinyChallengeActivity } from './activities/TinyChallengeActivity.jsx';
import { TraceWordsActivity } from './activities/TraceWordsActivity.jsx';

export function MiddleContent() {
  return (
    <>
      <TraceWordsActivity />
      <BeginningConsonantActivity />
      <MatchWordActivity />
      <ReadingCheckActivity />
      <TinyChallengeActivity />
      <ParentNote />
    </>
  );
}
