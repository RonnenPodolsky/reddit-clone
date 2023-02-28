import { doc, getDoc } from 'firebase/firestore';
import { GetServerSidePropsContext } from 'next';
import safeJsonStringify from 'safe-json-stringify';
import { Community } from '../../../atoms/CommunitiesAtom';
import CommunityNotFound from '../../../components/Communities/CommunityNotFound';
import Header from '../../../components/Communities/Header';
import PageContent from '../../../components/Layout/PageContent';
import { firestore } from '../../../config/firebase/firebaseClient';
type CommunityPageProps = {
  communityData: Community;
};

const CommunityPage: React.FC<CommunityPageProps> = ({ communityData }) => {
  // fetcvh data
  
  if (!communityData) {
    return <CommunityNotFound />;
  }
  return (
    <>
      <Header communityData={communityData} />
      <PageContent>
        <>
          <div>LHS</div>
          <div>LHS</div>
          <div>LHS</div>
          <div>LHS</div>
          <div>LHS</div>
        </>
        <>
          <div>RHS</div>
          <div>RHS</div>
        </>
      </PageContent>
    </>
  );
};
export default CommunityPage;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const communityDocRef = doc(
      firestore,
      'communities',
      context.query.communityId as string
    );
    const communityDoc = await getDoc(communityDocRef);

    return {
      props: {
        communityData: communityDoc.exists()
          ? JSON.parse(
              safeJsonStringify({ id: communityDoc.id, ...communityDoc.data() })
            )
          : '',
      },
    };
  } catch (error) {
    console.log('getServerSideProps error', error);
  }
}
