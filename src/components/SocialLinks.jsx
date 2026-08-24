// Renders the "Follow" row links for a concept's Instagram/Facebook, given a
// `social` object shaped like { instagram, facebook, facebookUrl }.
// - instagram: handle without the @ (or null/undefined if not live yet)
// - facebook: page username, used to build https://www.facebook.com/<facebook>
// - facebookUrl: full URL, takes priority over `facebook` when a page doesn't
//   have a clean username (e.g. a numeric profile.php?id= link)
export default function SocialLinks({ social }) {
  if (!social) return 'Instagram · Facebook';

  const { instagram, facebook, facebookUrl } = social;
  const igHref = instagram ? `https://www.instagram.com/${instagram}/` : null;
  const fbHref = facebookUrl || (facebook ? `https://www.facebook.com/${facebook}` : null);

  return (
    <>
      {igHref ? (
        <a href={igHref} target="_blank" rel="noopener noreferrer">Instagram</a>
      ) : (
        <span>Instagram (Coming Soon)</span>
      )}
      {' · '}
      {fbHref ? (
        <a href={fbHref} target="_blank" rel="noopener noreferrer">Facebook</a>
      ) : (
        <span>Facebook (Coming Soon)</span>
      )}
    </>
  );
}
