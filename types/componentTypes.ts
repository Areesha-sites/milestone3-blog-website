export interface BlogTypes {
  id: string;
  title: string;
  image: string;
  category: string;
  author: string;
  authorPic: string;
  published_date: string;
  reading_time: string;
  content: React.ReactNode;
  tags: string[];
}
export interface FooterLinksTypes {
  path: string;
  name: string;
}
export interface FooterSocialIconsTypes {
  adrress: string;
  icons: React.ReactNode;
}
export interface SliderDataTypes {
  img: string;
  location: string;
  description: string;
  title: string;
}
export interface CurrentSliderDataTypes {
  data: SliderDataTypes;
  index: number;
}
export interface SliderBgImagesTypes {
  transitionData: SliderDataTypes;
  currentSliderData: CurrentSliderDataTypes;
}
export interface OtherInfoPropsTypes {
  data: any;
  img?: string;
}
export interface ControlsTypes {
  currentSliderData: CurrentSliderDataTypes;
  sliderData: SliderDataTypes[];
  data: SliderDataTypes[];
  transitionData: SliderDataTypes;
  handleData: React.Dispatch<React.SetStateAction<SliderDataTypes[]>>;
  handleTransitiondata: React.Dispatch<React.SetStateAction<SliderDataTypes>>;
  handleCurrentSlidedata: React.Dispatch<
    React.SetStateAction<CurrentSliderDataTypes>
  >;
  initData: SliderDataTypes;
}
export interface SliderProgressTypes {
  curIndex: number;
  length: number;
}
export interface TestimonialTypes {
  quote: string;
  name: string;
  designation: string;
  src: string;
}
export interface SideBarTypes {
  title: string;
  id: number;
  content?: string;
}
export interface TimelineEntryTypes {
  title: string;
  content: React.ReactNode;
}
export interface SignupCardPropTypes {
  isOpen: boolean;
  onClose: () => void;
}
export interface PaginationPropTypes {
  currentPage: number;
  onPageChange: (pageNumber: number) => void;
  totalBlogs: number;
  pageSize: number;
}
export interface BlogCardsPropTypes {
  blogs: BlogTypes[];
  currentPage: number;
  selectedCategory: string | null;
  pageSize: number;
}
export interface PeoplePropTypes {
  id: number;
  name: string;
  designation: string;
  image: string;
}
export interface TestimonialsTypes {
  quote: string;
  name: string;
  designation: string;
  src: string;
}
export interface AnimatedTooltipTypes {
  id: number;
  name: string;
  designation: string;
  image: string;
}
export interface ParticlesPropsTypes  {
  id?: string;
  className?: string;
  background?: string;
  particleSize?: number;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleColor?: string;
  particleDensity?: number;
};
export interface FlipsWordsPropTypes {
  words: string[];
  duration?: number;
  className?: string;
}
export interface CoverPropTypes {
  children?: React.ReactNode;
  className?: string;
}
export interface BeamPropTypes {
  className?: string;
  delay?: number;
  duration?: number;
  hovered?: boolean;
  width?: number;
}
export interface CircleIconTypes {
  className?: string;
  delay?: number;
}