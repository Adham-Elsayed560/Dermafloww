import heroSkinGenerated from '../assets/images/hero_skin_1794764223939.jpg';
import brandHandsGenerated from '../assets/images/brand_hands_1794764226706.jpg';
import dermatoscopeGenerated from '../assets/images/dermatoscope_1794764227660.jpg';
import overviewInfographicGenerated from '../assets/images/overview_infographic_1794764225030.jpg';

const uploadedWebpModules = import.meta.glob('../assets/images/*.webp', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

function resolveAsset(preferredWebpFilename: string, fallbackAsset: string): string {
  const matchedKey = Object.keys(uploadedWebpModules).find((key) =>
    key.endsWith(`/${preferredWebpFilename}`)
  );
  return matchedKey ? uploadedWebpModules[matchedKey] : fallbackAsset;
}

export interface EditorialImageAsset {
  src: string;
  width: number;
  height: number;
}

export const IMAGES: Record<
  'heroSkin' | 'brandHands' | 'dermatoscope' | 'overviewInfographic',
  EditorialImageAsset
> = {
  heroSkin: {
    src: resolveAsset('hero-skin.webp', heroSkinGenerated),
    width: 900,
    height: 1200,
  },
  brandHands: {
    src: resolveAsset('brand-hands.webp', brandHandsGenerated),
    width: 1200,
    height: 900,
  },
  dermatoscope: {
    src: resolveAsset('dermatoscope.webp', dermatoscopeGenerated),
    width: 1200,
    height: 900,
  },
  overviewInfographic: {
    src: resolveAsset('overview-infographic.webp', overviewInfographicGenerated),
    width: 1600,
    height: 900,
  },
};
