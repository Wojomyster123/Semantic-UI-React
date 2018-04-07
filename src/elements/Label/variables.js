/**
 * UI Label
 *
 * Ported from:
 * https://github.com/Semantic-Org/Semantic-UI-LESS/blob/master/themes/default/elements/label.variables
 *
 * This file began as a direct copy of the less file above.
 * The original LESS was left above each section as it was ported to JS.
 * This helps to see the logic behind how we could port styles to JS.
 */

export default (siteVars) => {
  const vars = {}
  // /*******************************
  //              Label
  // *******************************/
  //
  // /*-------------------
  //        Element
  // --------------------*/
  //
  vars.verticalAlign = 'baseline'
  vars.verticalMargin = '0em'
  vars.horizontalMargin = siteVars.relative2px
  vars.backgroundColor = '#E8E8E8'
  vars.color = siteVars.mutedTextColor
  vars.backgroundImage = 'none'
  vars.verticalPadding = '0.5833em' // @medium is not emSize custom value required
  vars.horizontalPadding = '0.833em'
  vars.borderRadius = siteVars.absoluteBorderRadius
  vars.textTransform = 'none'
  vars.fontWeight = siteVars.bold
  // @borderWidth: 1px
  vars.border = '0px solid transparent'

  // @lineHeightOffset: -(@verticalPadding / 2),
  //
  // @labelTransitionDuration: @defaultDuration,
  // @labelTransitionEasing: @defaultEasing,
  // @transition: background @labelTransitionDuration @labelTransitionEasing,
  //
  // /* Group */
  // @groupVerticalMargin: 0.5em,
  // @groupHorizontalMargin: 0.5em,
  //
  // /*-------------------
  //         Parts
  // --------------------*/
  //
  // /* Link */
  // @linkOpacity: 0.5,
  // @linkTransition: @labelTransitionDuration opacity @labelTransitionEasing,
  //
  // /* Icon */
  // @iconDistance: 0.75em,
  //
  // /* Image */
  vars.imageHeight = `calc(1em + ${vars.verticalPadding} * 2)`

  // /* Detail */
  vars.detailFontWeight = siteVars.bold
  vars.detailOpacity = 0.8
  // @detailIconDistance: 0.25em,
  vars.detailMargin = '1em'
  //
  // /* Delete */
  // @deleteOpacity: @linkOpacity,
  // @deleteSize: @relativeSmall,
  // @deleteMargin: 0.5em,
  // @deleteTransition: background @labelTransitionDuration @labelTransitionEasing,

  // /*-------------------
  //         Types
  // --------------------*/

  // /* Image Label */
  vars.imageLabelBackground = siteVars.backgroundColor
  vars.imageLabelVerticalPadding = siteVars.verticalPadding
  vars.imageLabelHorizontalPadding = siteVars.horizontalPadding
  vars.imageLabelTextDistance = '0.5em'
  vars.imageLabelDetailDistance = vars.imageLabelTextDistance
  vars.imageLabelBorderRadius = siteVars.borderRadius
  vars.imageLabelBoxShadow = 'none'
  vars.imageLabelPadding = `${vars.imageLabelVerticalPadding} ${vars.imageLabelHorizontalPadding} ${vars.imageLabelVerticalPadding} ${vars.imageLabelTextDistance}`

  vars.imageLabelImageMargin = `-${vars.verticalPadding} ${vars.imageLabelTextDistance} -${vars.verticalPadding} -${vars.imageLabelTextDistance}`
  vars.imageLabelImageBorderRadius = `${vars.imageLabelBorderRadius} 0em 0em ${vars.imageLabelBorderRadius}`
  vars.imageLabelImageHeight = `${vars.imageHeight}`

  vars.imageLabelDetailBackground = siteVars.strongTransparentBlack
  vars.imageLabelDetailPadding = `${vars.imageLabelVerticalPadding} ${vars.imageLabelHorizontalPadding}`
  vars.imageLabelDetailMargin = `-${vars.imageLabelVerticalPadding} -${vars.imageLabelHorizontalPadding} -${vars.imageLabelVerticalPadding} ${vars.imageLabelDetailDistance}`
  //
  // /*-------------------
  //         States
  // --------------------*/
  //
  // /* Hover */
  // @labelHoverBackgroundColor: #E0E0E0,
  // @labelHoverBackgroundImage: none,
  // @labelHoverTextColor: @hoveredTextColor,
  //
  // /* Active */
  // @labelActiveBackgroundColor: #D0D0D0,
  // @labelActiveBackgroundImage: none,
  // @labelActiveTextColor: @selectedTextColor,
  //
  // /* Active Hover */
  // @labelActiveHoverBackgroundColor: #C8C8C8,
  // @labelActiveHoverBackgroundImage: none,
  // @labelActiveHoverTextColor: @selectedTextColor,
  //
  //
  // /*-------------------
  //       Variations
  // --------------------*/
  //
  // /* Basic */
  // @basicBackground: none @white,
  // @basicBorderWidth: 1px,
  // @basicBorder: @basicBorderWidth solid @borderColor,
  // @basicColor: @textColor,
  // @basicBoxShadow: none,
  //
  // @basicHoverBackground: @basicBackground,
  // @basicHoverColor: @linkHoverColor,
  // @basicHoverBorder: @basicBorder,
  // @basicHoverBoxShadow: @basicBoxShadow,
  //
  // /* Tag */
  // @tagCircleColor: @white,
  // @tagCircleSize: 0.5em,
  // @tagHorizontalPadding: 1.5em,
  // @tagCircleBoxShadow: 0 -1px 1px 0 rgba(0, 0, 0, 0.3),
  // @tagTriangleRightOffset: 100%,
  // @tagTriangleTopOffset: 50%,
  // @tagTriangleSize: 1.56em,
  // @tagTriangleBackgroundImage: none,
  // @tagTransition: none; /* Avoids error with background: inherit; on animation */
  //
  // /* Ribbon */
  // @ribbonTriangleSize: 1.2em,
  // @ribbonShadowColor: rgba(0, 0, 0, 0.15),
  //
  // @ribbonMargin: 1rem,
  // @ribbonOffset: ~"calc("-@ribbonMargin~" - "@ribbonTriangleSize~")",
  // @ribbonDistance: ~"calc("@ribbonMargin~" + "@ribbonTriangleSize~")",
  // @rightRibbonOffset:  ~"calc(100% + "@ribbonMargin~" + "@ribbonTriangleSize~")",
  //
  // @ribbonImageTopDistance: 1rem,
  // @ribbonImageMargin: -0.05rem; /* Rounding Offset on Triangle */
  // @ribbonImageOffset: ~"calc("-@ribbonImageMargin~" - "@ribbonTriangleSize~")",
  // @rightRibbonImageOffset:  ~"calc(100% + "@ribbonImageMargin~" + "@ribbonTriangleSize~")",
  //
  // @ribbonTableMargin: @relativeMini; /* Rounding Offset on Triangle */
  // @ribbonTableOffset: ~"calc("-@ribbonTableMargin~" - "@ribbonTriangleSize~")",
  // @rightRibbonTableOffset:  ~"calc(100% + "@ribbonTableMargin~" + "@ribbonTriangleSize~")",
  //
  //
  // /* Colors */
  // @redTextColor: @white,
  // @orangeTextColor: @white,
  // @yellowTextColor: @white,
  // @oliveTextColor: @white,
  // @greenTextColor: @white,
  // @tealTextColor: @white,
  // @blueTextColor: @white,
  // @violetTextColor: @white,
  // @purpleTextColor: @white,
  // @pinkTextColor: @white,
  // @brownTextColor: @white,
  // @greyTextColor: @white,
  // @blackTextColor: @white,
  //
  // @redHoverTextColor: @white,
  // @orangeHoverTextColor: @white,
  // @yellowHoverTextColor: @white,
  // @oliveHoverTextColor: @white,
  // @greenHoverTextColor: @white,
  // @tealHoverTextColor: @white,
  // @blueHoverTextColor: @white,
  // @violetHoverTextColor: @white,
  // @purpleHoverTextColor: @white,
  // @pinkHoverTextColor: @white,
  // @brownHoverTextColor: @white,
  // @greyHoverTextColor: @white,
  // @blackHoverTextColor: @white,
  //
  // @redRibbonShadow: darken(@red, 10),
  // @orangeRibbonShadow: darken(@orange, 10),
  // @yellowRibbonShadow: darken(@yellow, 10),
  // @oliveRibbonShadow: darken(@olive, 10),
  // @greenRibbonShadow: darken(@green, 10),
  // @tealRibbonShadow: darken(@teal, 10),
  // @blueRibbonShadow: darken(@blue, 10),
  // @violetRibbonShadow: darken(@violet, 10),
  // @purpleRibbonShadow: darken(@purple, 10),
  // @pinkRibbonShadow: darken(@pink, 10),
  // @brownRibbonShadow: darken(@brown, 10),
  // @greyRibbonShadow: darken(@grey, 10),
  // @blackRibbonShadow: darken(@black, 10),
  //
  // /* Attached */
  // @attachedSegmentPadding: 2rem,
  // @attachedVerticalPadding: 0.75em,
  // @attachedHorizontalPadding: 1em,
  //
  // @attachedCornerBorderRadius: @3px,
  // @attachedBorderRadius: @borderRadius,
  //
  // /* Corner */
  // @cornerSizeRatio: 1,
  // @cornerTransition: color @labelTransitionDuration @labelTransitionEasing,
  // @cornerTriangleSize: 4em,
  // @cornerTriangleTransition: border-color @labelTransitionDuration @labelTransitionEasing,
  // @cornerTriangleZIndex: 1,
  //
  // @cornerIconSize: @relativeLarge,
  // @cornerIconTopOffset: @relative9px,
  // @cornerIconLeftOffset: @relative11px,
  //
  // /* Corner Text */
  // @cornerTextWidth: 3em,
  // @cornerTextWeight: @bold,
  // @cornerTextSize: 1em,
  //
  // /* Horizontal */
  // @horizontalLabelMinWidth: 3em,
  // @horizontalLabelMargin: 0.5em,
  // @horizontalLabelVerticalPadding: 0.4em,
  //
  // /* Circular Padding */
  // @circularPadding: 0.5em,
  // @circularMinSize: 2em,
  // @emptyCircleSize: 0.5em,
  //
  // /* Pointing */
  // @pointingBorderColor: inherit,
  // @pointingBorderWidth: @borderWidth,
  // @pointingVerticalDistance: 1em,
  // @pointingTriangleSize: 0.6666em,
  // @pointingHorizontalDistance: @pointingTriangleSize,
  //
  // @pointingTriangleTransition: background @labelTransitionDuration @labelTransitionEasing,
  // @pointingTriangleZIndex: 2,
  //
  // /* Basic Pointing */
  // @basicPointingTriangleOffset: -@pointingBorderWidth,
  //
  // /* Floating */
  // @floatingTopOffset: -1em,
  // @floatingLeftOffset: -1.5em,
  // @floatingZIndex: 100,
  //
  // /*-------------------
  //         Group
  // --------------------*/
  //
  // /* Sizing */
  // @mini    : @9px,
  // @tiny    : @10px,
  // @small   : @11px,
  // @medium  : @12px,
  // @large   : @absoluteMedium,
  // @big     : @absoluteBig,
  // @huge    : @absoluteHuge,
  // @massive : @absoluteMassive,

  return vars
}
