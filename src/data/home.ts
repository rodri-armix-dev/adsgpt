import type { Locale } from '../i18n/config';
import { homeData, type HomeData } from './pages/home';

// Components consume the same props whether content comes from local files or WordPress.
export async function getHomeData(locale: Locale): Promise<HomeData> {
	return homeData[locale];
}
