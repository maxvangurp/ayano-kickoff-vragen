/* @ds-bundle: {"format":4,"namespace":"AizyDesignSystem_8a3556","components":[{"name":"AgentExchange","sourcePath":"components/app/AgentExchange.jsx"},{"name":"AppFrame","sourcePath":"components/app/AppFrame.jsx"},{"name":"NavGlyph","sourcePath":"components/app/NavGlyph.jsx"},{"name":"RecommendationRow","sourcePath":"components/app/RecommendationRow.jsx"},{"name":"SidebarNav","sourcePath":"components/app/SidebarNav.jsx"},{"name":"BulletList","sourcePath":"components/content/BulletList.jsx"},{"name":"CalloutBar","sourcePath":"components/content/CalloutBar.jsx"},{"name":"GradientHeadline","sourcePath":"components/content/GradientHeadline.jsx"},{"name":"NumberedStep","sourcePath":"components/content/NumberedStep.jsx"},{"name":"PriceCard","sourcePath":"components/content/PriceCard.jsx"},{"name":"QuoteCard","sourcePath":"components/content/QuoteCard.jsx"},{"name":"AccentRule","sourcePath":"components/core/AccentRule.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Chip","sourcePath":"components/core/Chip.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"ComparisonTable","sourcePath":"components/data/ComparisonTable.jsx"},{"name":"DataTable","sourcePath":"components/data/DataTable.jsx"},{"name":"Delta","sourcePath":"components/data/Delta.jsx"},{"name":"MetricTile","sourcePath":"components/data/MetricTile.jsx"},{"name":"StatCard","sourcePath":"components/data/StatCard.jsx"},{"name":"ToggleRow","sourcePath":"components/data/ToggleRow.jsx"},{"name":"Slide","sourcePath":"components/slide/Slide.jsx"},{"name":"SlideHeader","sourcePath":"components/slide/SlideHeader.jsx"}],"sourceHashes":{"components/app/AgentExchange.jsx":"56e2846b8d2a","components/app/AppFrame.jsx":"97397dbbc631","components/app/NavGlyph.jsx":"ddc08db7288a","components/app/RecommendationRow.jsx":"ce9409b53e5c","components/app/SidebarNav.jsx":"e12c88287293","components/content/BulletList.jsx":"3a10f5b6af85","components/content/CalloutBar.jsx":"d7d3d31bb9be","components/content/GradientHeadline.jsx":"76d3168d21bd","components/content/NumberedStep.jsx":"78deb4b4a742","components/content/PriceCard.jsx":"a81de5ec3013","components/content/QuoteCard.jsx":"d3f6b400c295","components/core/AccentRule.jsx":"8696183a8af5","components/core/Badge.jsx":"f06452660182","components/core/Button.jsx":"30f6e14c4c3c","components/core/Card.jsx":"0d5c537e3a66","components/core/Chip.jsx":"aa4bcc29bf65","components/core/Eyebrow.jsx":"6a9a6e2aa6fc","components/core/Logo.jsx":"85c3415c5a6d","components/data/ComparisonTable.jsx":"13e0438a7503","components/data/DataTable.jsx":"5a4ad9ee05d3","components/data/Delta.jsx":"ad7a11a09c91","components/data/MetricTile.jsx":"e565d908bdc8","components/data/StatCard.jsx":"db5531e40703","components/data/ToggleRow.jsx":"6b45c4da737e","components/slide/Slide.jsx":"a5b9d261ffe7","components/slide/SlideHeader.jsx":"d2fcb9a1c0a0","ui_kits/platform/Aanbevelingen.jsx":"b4ce6163e771","ui_kits/platform/AizyAgent.jsx":"137986040158","ui_kits/platform/Autoscale.jsx":"1ef38adbdbb4","ui_kits/platform/Campagnes.jsx":"f3210ba673de","ui_kits/platform/Overzicht.jsx":"873e9c616803"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AizyDesignSystem_8a3556 = window.AizyDesignSystem_8a3556 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/app/AgentExchange.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function AgentExchange({
  question,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      background: 'var(--grey-100)',
      borderRadius: 'var(--radius-md)',
      padding: 14,
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--purple-500)',
      color: '#fff',
      borderRadius: 'var(--radius-sm)',
      padding: '9px 14px',
      fontFamily: 'var(--font-core)',
      fontSize: 11.5,
      fontWeight: 'var(--weight-semibold)',
      maxWidth: '86%'
    }
  }, question)), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--white)',
      border: '1px solid var(--grey-200)',
      borderRadius: 'var(--radius-sm)',
      padding: 14,
      marginTop: 12
    }
  }, children));
}
Object.assign(__ds_scope, { AgentExchange });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/app/AgentExchange.jsx", error: String((e && e.message) || e) }); }

// components/app/AppFrame.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function AppFrame({
  title,
  subtitle,
  actions,
  sidebar,
  children,
  height,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: 'flex',
      background: 'var(--white)',
      borderRadius: 'var(--radius-frame)',
      boxShadow: 'var(--shadow-frame)',
      overflow: 'hidden',
      height,
      ...style
    }
  }), sidebar, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column'
    }
  }, (title || actions) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 16,
      padding: '17px 20px 14px'
    }
  }, /*#__PURE__*/React.createElement("div", null, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 16,
      fontWeight: 'var(--weight-bold)',
      letterSpacing: 'var(--tracking-heading)',
      color: 'var(--ink-900)'
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-core)',
      fontSize: 10.5,
      color: 'var(--text-subtle)',
      marginTop: 3
    }
  }, subtitle)), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 7,
      flex: 'none'
    }
  }, actions)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 20px 20px',
      flex: 1,
      minWidth: 0,
      overflow: 'hidden'
    }
  }, children)));
}
Object.assign(__ds_scope, { AppFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/app/AppFrame.jsx", error: String((e && e.message) || e) }); }

// components/app/NavGlyph.jsx
try { (() => {
function NavGlyph({
  active,
  size = 15,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      borderRadius: 4,
      flex: 'none',
      background: active ? 'var(--purple-500)' : 'var(--grey-200)',
      ...style
    }
  });
}
Object.assign(__ds_scope, { NavGlyph });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/app/NavGlyph.jsx", error: String((e && e.message) || e) }); }

// components/content/BulletList.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function BulletList({
  items,
  tone = 'light',
  dotTone,
  style,
  ...rest
}) {
  const dark = tone === 'dark';
  const dot = dotTone || (dark ? 'var(--mint-400)' : 'var(--purple-500)');
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: 'grid',
      gap: 14,
      ...style
    }
  }), items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: '14px 1fr',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: dot,
      marginTop: 6
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 14.5,
      fontWeight: 'var(--weight-bold)',
      color: dark ? '#fff' : 'var(--ink-900)'
    }
  }, it.title), it.description && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-core)',
      fontSize: 13,
      lineHeight: 'var(--leading-loose)',
      color: dark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)',
      marginTop: 3
    }
  }, it.description)))));
}
Object.assign(__ds_scope, { BulletList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/BulletList.jsx", error: String((e && e.message) || e) }); }

// components/content/CalloutBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function CalloutBar({
  label,
  variant = 'ink',
  children,
  highlight,
  style,
  ...rest
}) {
  const skins = {
    ink: {
      background: 'var(--ink-900)',
      color: '#fff'
    },
    purple: {
      background: 'var(--gradient-purple)',
      color: '#fff'
    },
    light: {
      background: 'var(--white)',
      color: 'var(--ink-900)',
      border: '1px solid var(--grey-200)',
      boxShadow: 'var(--shadow-card)'
    }
  };
  const accent = variant === 'light' ? 'var(--purple-500)' : 'var(--mint-400)';
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 18,
      flexWrap: 'wrap',
      borderRadius: 'var(--radius-md)',
      padding: '17px 24px',
      ...skins[variant],
      ...style
    }
  }), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 14,
      fontWeight: 'var(--weight-bold)',
      color: accent,
      flex: 'none'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-core)',
      fontSize: 13.5,
      fontWeight: 'var(--weight-semibold)',
      lineHeight: 1.45
    }
  }, children), highlight && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-core)',
      fontSize: 13.5,
      fontWeight: 'var(--weight-bold)',
      color: accent
    }
  }, highlight));
}
Object.assign(__ds_scope, { CalloutBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/CalloutBar.jsx", error: String((e && e.message) || e) }); }

// components/content/GradientHeadline.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function GradientHeadline({
  lines,
  size = 'display',
  tone = 'light',
  style,
  ...rest
}) {
  const sizes = {
    hero: 'var(--text-hero)',
    display: 'var(--text-display)',
    title: 'var(--text-title)'
  };
  const tracking = size === 'hero' ? 'var(--tracking-hero)' : 'var(--tracking-display)';
  return /*#__PURE__*/React.createElement("h1", _extends({}, rest, {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: sizes[size],
      fontWeight: 'var(--weight-black)',
      letterSpacing: tracking,
      lineHeight: 'var(--leading-tight)',
      margin: 0,
      color: tone === 'dark' ? '#fff' : 'var(--ink-900)',
      ...style
    }
  }), lines.map((line, i) => {
    const text = typeof line === 'string' ? line : line.text;
    const grad = typeof line === 'object' && line.gradient;
    return /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        display: 'block',
        ...(grad ? {
          background: 'var(--gradient-brand)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent'
        } : null)
      }
    }, text);
  }));
}
Object.assign(__ds_scope, { GradientHeadline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/GradientHeadline.jsx", error: String((e && e.message) || e) }); }

// components/content/QuoteCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function QuoteCard({
  quote,
  author,
  role,
  variant = 'light',
  rating,
  style,
  ...rest
}) {
  const dark = variant !== 'light';
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      background: variant === 'purple' ? 'var(--gradient-purple)' : 'var(--white)',
      border: variant === 'purple' ? '1px solid transparent' : '1px solid var(--grey-200)',
      boxShadow: variant === 'purple' ? 'none' : 'var(--shadow-card)',
      borderRadius: 'var(--radius-card)',
      padding: '18px 18px 16px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      gap: 14,
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", null, rating && /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#F5A524',
      fontSize: 12,
      letterSpacing: 1,
      marginBottom: 8
    }
  }, '\u2605'.repeat(rating)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-core)',
      fontSize: 12.5,
      fontStyle: 'italic',
      lineHeight: 'var(--leading-loose)',
      color: dark ? 'var(--text-on-purple-muted)' : 'var(--text-muted)'
    }
  }, "\u201C", quote, "\u201D")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 12.5,
      fontWeight: 'var(--weight-bold)',
      color: dark ? '#fff' : 'var(--ink-900)'
    }
  }, author), role && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-core)',
      fontSize: 11,
      color: dark ? 'var(--text-on-purple-muted)' : 'var(--text-subtle)',
      marginTop: 2
    }
  }, role)));
}
Object.assign(__ds_scope, { QuoteCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/QuoteCard.jsx", error: String((e && e.message) || e) }); }

// components/core/AccentRule.jsx
try { (() => {
function AccentRule({
  tone = 'purple',
  width = 22,
  style
}) {
  const bg = tone === 'mint' ? 'var(--mint-400)' : tone === 'white' ? 'rgba(255,255,255,.9)' : 'var(--purple-500)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height: 'var(--rule-accent-h)',
      borderRadius: 2,
      background: bg,
      flex: 'none',
      ...style
    }
  });
}
Object.assign(__ds_scope, { AccentRule });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/AccentRule.jsx", error: String((e && e.message) || e) }); }

// components/content/NumberedStep.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function NumberedStep({
  number,
  style_ = 'circle',
  eyebrow,
  title,
  children,
  variant = 'light',
  style,
  ...rest
}) {
  const dark = variant !== 'light';
  const skins = {
    light: {
      background: 'var(--white)',
      border: '1px solid var(--grey-200)',
      boxShadow: 'var(--shadow-card)'
    },
    purple: {
      background: 'var(--gradient-purple)',
      border: '1px solid transparent'
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      borderRadius: 'var(--radius-card)',
      padding: 'var(--card-pad)',
      ...skins[variant],
      ...style
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.AccentRule, {
    tone: dark ? 'mint' : 'purple'
  }), number != null && style_ === 'circle' && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 26,
      height: 26,
      borderRadius: '50%',
      background: dark ? 'rgba(255,255,255,.2)' : 'var(--purple-500)',
      color: '#fff',
      display: 'grid',
      placeItems: 'center',
      marginTop: 16,
      fontFamily: 'var(--font-core)',
      fontSize: 12.5,
      fontWeight: 'var(--weight-bold)'
    }
  }, number), number != null && style_ === 'ordinal' && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      fontFamily: 'var(--font-core)',
      fontSize: 11,
      fontWeight: 'var(--weight-bold)',
      letterSpacing: '0.1em',
      color: dark ? 'rgba(255,255,255,.7)' : 'var(--purple-500)'
    }
  }, number), eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      fontFamily: 'var(--font-core)',
      fontSize: 10.5,
      fontWeight: 'var(--weight-bold)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: dark ? 'var(--mint-400)' : 'var(--purple-500)'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 15.5,
      fontWeight: 'var(--weight-bold)',
      letterSpacing: 'var(--tracking-heading)',
      lineHeight: 1.22,
      marginTop: 12,
      color: dark ? '#fff' : 'var(--ink-900)'
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-core)',
      fontSize: 12.5,
      lineHeight: 'var(--leading-loose)',
      marginTop: 7,
      color: dark ? 'var(--text-on-purple-muted)' : 'var(--text-muted)'
    }
  }, children));
}
Object.assign(__ds_scope, { NumberedStep });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/NumberedStep.jsx", error: String((e && e.message) || e) }); }

// components/content/PriceCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function PriceCard({
  name,
  price,
  period = 'p/m',
  features = [],
  variant = 'light',
  note,
  children,
  style,
  ...rest
}) {
  const dark = variant === 'ink';
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      background: dark ? 'var(--ink-800)' : 'var(--white)',
      border: dark ? '1px solid rgba(255,255,255,.08)' : '1px solid var(--grey-200)',
      boxShadow: dark ? 'none' : 'var(--shadow-card)',
      borderRadius: 'var(--radius-card)',
      padding: 'var(--card-pad)',
      ...style
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.AccentRule, {
    tone: dark ? 'mint' : 'purple'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 15.5,
      fontWeight: 'var(--weight-bold)',
      color: dark ? '#fff' : 'var(--ink-900)',
      marginTop: 16
    }
  }, name), price && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 5,
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 32,
      fontWeight: 'var(--weight-black)',
      letterSpacing: '-0.03em',
      color: dark ? '#fff' : 'var(--purple-500)'
    }
  }, price), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-core)',
      fontSize: 12,
      color: dark ? 'var(--text-on-dark-muted)' : 'var(--text-subtle)'
    }
  }, period)), features.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: dark ? '1px solid rgba(255,255,255,.10)' : '1px solid var(--grey-200)',
      marginTop: 14,
      paddingTop: 12,
      display: 'grid',
      gap: 5
    }
  }, features.map((ft, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      fontFamily: 'var(--font-core)',
      fontSize: 12,
      color: dark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)'
    }
  }, ft))), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-core)',
      fontSize: 12,
      lineHeight: 'var(--leading-loose)',
      color: dark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)',
      marginTop: 12
    }
  }, children), note && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-core)',
      fontSize: 10.5,
      color: dark ? 'rgba(255,255,255,.5)' : 'var(--text-subtle)',
      marginTop: 12
    }
  }, note));
}
Object.assign(__ds_scope, { PriceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/PriceCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tones = {
  positive: {
    color: 'var(--green-600)',
    background: 'var(--green-50)'
  },
  pending: {
    color: 'var(--amber-600)',
    background: 'var(--amber-50)'
  },
  negative: {
    color: 'var(--rose-500)',
    background: 'var(--rose-50)'
  },
  neutral: {
    color: 'var(--ink-500)',
    background: 'var(--grey-100)'
  },
  accent: {
    color: 'var(--purple-500)',
    background: 'var(--purple-50)'
  },
  onDark: {
    color: '#fff',
    background: 'rgba(255,255,255,.12)'
  }
};
function Badge({
  tone = 'neutral',
  dot,
  style,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-core)',
      fontSize: 11.5,
      fontWeight: 'var(--weight-semibold)',
      lineHeight: 1.3,
      padding: '4px 10px',
      borderRadius: 'var(--radius-pill)',
      ...tones[tone],
      ...style
    }
  }), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 5,
      height: 5,
      borderRadius: '50%',
      background: 'currentColor'
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/app/RecommendationRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function RecommendationRow({
  title,
  meta,
  status,
  statusTone = 'positive',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      background: 'var(--white)',
      border: '1px solid var(--grey-200)',
      borderRadius: 'var(--radius-md)',
      padding: '11px 13px',
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 17,
      height: 17,
      borderRadius: 5,
      background: 'var(--grey-200)',
      flex: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 12.5,
      fontWeight: 'var(--weight-bold)',
      color: 'var(--ink-900)'
    }
  }, title), meta && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-core)',
      fontSize: 10.5,
      color: 'var(--text-subtle)',
      marginTop: 2
    }
  }, meta)), status && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: statusTone
  }, status));
}
Object.assign(__ds_scope, { RecommendationRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/app/RecommendationRow.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const base = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 8,
  fontFamily: 'var(--font-core)',
  fontWeight: 'var(--weight-semibold)',
  letterSpacing: '-0.005em',
  border: '1px solid transparent',
  borderRadius: 'var(--radius-sm)',
  cursor: 'pointer',
  whiteSpace: 'nowrap',
  transition: 'var(--transition-base)',
  textDecoration: 'none'
};
const sizes = {
  sm: {
    fontSize: 12.5,
    padding: '7px 13px',
    borderRadius: 'var(--radius-xs)'
  },
  md: {
    fontSize: 14,
    padding: '10px 18px'
  },
  lg: {
    fontSize: 15.5,
    padding: '13px 24px',
    borderRadius: 'var(--radius-md)'
  }
};
const variants = {
  primary: {
    background: 'var(--purple-500)',
    color: '#fff'
  },
  gradient: {
    background: 'var(--gradient-purple)',
    color: '#fff',
    boxShadow: 'var(--shadow-purple)'
  },
  secondary: {
    background: 'var(--white)',
    color: 'var(--ink-900)',
    borderColor: 'var(--grey-200)',
    boxShadow: 'var(--shadow-hairline)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--purple-500)'
  },
  onDark: {
    background: 'rgba(255,255,255,.08)',
    color: '#fff',
    borderColor: 'rgba(255,255,255,.16)'
  },
  mint: {
    background: 'var(--mint-400)',
    color: 'var(--ink-900)'
  }
};
const hovers = {
  primary: {
    background: 'var(--purple-600)'
  },
  gradient: {
    filter: 'brightness(1.06)'
  },
  secondary: {
    background: 'var(--grey-50)',
    borderColor: 'var(--grey-300)'
  },
  ghost: {
    background: 'var(--purple-50)'
  },
  onDark: {
    background: 'rgba(255,255,255,.14)'
  },
  mint: {
    background: 'var(--mint-300)'
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  disabled,
  iconLeft,
  iconRight,
  fullWidth,
  as = 'button',
  style,
  children,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({}, rest, {
    disabled: as === 'button' ? disabled : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...base,
      ...sizes[size],
      ...variants[variant],
      ...(hover && !disabled ? hovers[variant] : null),
      ...(fullWidth ? {
        width: '100%'
      } : null),
      ...(disabled ? {
        opacity: 0.4,
        cursor: 'not-allowed'
      } : null),
      ...style
    }
  }), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  variant = 'light',
  rule = true,
  title,
  children,
  interactive,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const skins = {
    light: {
      background: 'var(--white)',
      border: '1px solid var(--grey-200)',
      boxShadow: 'var(--shadow-card)',
      color: 'var(--ink-900)'
    },
    ink: {
      background: 'var(--ink-800)',
      border: '1px solid rgba(255,255,255,.08)',
      color: '#fff'
    },
    purple: {
      background: 'var(--gradient-purple)',
      border: '1px solid transparent',
      color: '#fff'
    },
    translucent: {
      background: 'rgba(255,255,255,.04)',
      border: '1px solid rgba(255,255,255,.10)',
      color: '#fff'
    }
  };
  const ruleTone = variant === 'light' ? 'purple' : 'mint';
  const bodyColor = variant === 'light' ? 'var(--text-muted)' : variant === 'purple' ? 'var(--text-on-purple-muted)' : 'var(--text-on-dark-muted)';
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      borderRadius: 'var(--radius-card)',
      padding: 'var(--card-pad)',
      transition: 'var(--transition-base)',
      ...skins[variant],
      ...(interactive && hover ? {
        transform: 'translateY(-2px)',
        boxShadow: variant === 'light' ? 'var(--shadow-card-hover)' : 'var(--shadow-purple)'
      } : null),
      ...style
    }
  }), rule && /*#__PURE__*/React.createElement(__ds_scope.AccentRule, {
    tone: variant === 'purple' ? 'mint' : ruleTone
  }), title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-subhead)',
      fontWeight: 'var(--weight-bold)',
      letterSpacing: 'var(--tracking-heading)',
      lineHeight: 1.22,
      marginTop: rule ? 16 : 0
    }
  }, title), children != null && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-small)',
      lineHeight: 'var(--leading-loose)',
      color: bodyColor,
      marginTop: title ? 8 : rule ? 16 : 0
    }
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Chip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Chip({
  tone = 'light',
  style,
  children,
  ...rest
}) {
  const tones = {
    light: {
      background: 'var(--grey-100)',
      color: 'var(--ink-900)',
      border: '1px solid var(--grey-200)'
    },
    onDark: {
      background: 'rgba(255,255,255,.10)',
      color: '#fff',
      border: '1px solid rgba(255,255,255,.16)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--ink-900)',
      border: '1px solid var(--grey-300)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      fontFamily: 'var(--font-core)',
      fontSize: 13,
      fontWeight: 'var(--weight-semibold)',
      lineHeight: 1.3,
      padding: '8px 15px',
      borderRadius: 'var(--radius-pill)',
      ...tones[tone],
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Chip.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Eyebrow({
  tone = 'light',
  style,
  children,
  ...rest
}) {
  const color = tone === 'dark' ? 'var(--mint-400)' : tone === 'onPurple' ? 'rgba(255,255,255,.72)' : 'var(--purple-500)';
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      fontFamily: 'var(--font-core)',
      fontSize: 'var(--text-eyebrow)',
      fontWeight: 'var(--weight-bold)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      lineHeight: 1,
      color,
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SRC = {
  'lockup-gradient': 'logo-aizy-gradient.png',
  'lockup-white': 'logo-aizy-white.png',
  'lockup-dark': 'logo-aizy-dark.png',
  'mark-gradient': 'mark-aizy-gradient.png',
  'mark-white': 'mark-aizy-white.png',
  'mark-dark': 'mark-aizy-dark.png'
};
function Logo({
  variant = 'lockup-gradient',
  height = 28,
  basePath = '../assets',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("img", _extends({}, rest, {
    src: `${basePath}/${SRC[variant]}`,
    alt: "aizy",
    style: {
      height,
      width: 'auto',
      display: 'block',
      ...style
    }
  }));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/app/SidebarNav.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SidebarNav({
  items,
  active,
  onSelect,
  logoBasePath = '../assets',
  width = 148,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({}, rest, {
    style: {
      width,
      flex: 'none',
      background: 'var(--white)',
      borderRight: '1px solid var(--grey-150)',
      padding: '16px 12px',
      display: 'flex',
      flexDirection: 'column',
      gap: 18,
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingLeft: 4
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    variant: "lockup-gradient",
    height: 18,
    basePath: logoBasePath
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 2
    }
  }, items.map(it => {
    const isActive = it === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it,
      onClick: () => onSelect && onSelect(it),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 9,
        width: '100%',
        textAlign: 'left',
        border: '1px solid ' + (isActive ? 'var(--purple-100)' : 'transparent'),
        background: isActive ? 'var(--purple-50)' : 'transparent',
        borderRadius: 'var(--radius-sm)',
        padding: '7px 9px',
        cursor: 'pointer',
        fontFamily: 'var(--font-core)',
        fontSize: 11.5,
        fontWeight: isActive ? 'var(--weight-semibold)' : 'var(--weight-medium)',
        color: isActive ? 'var(--purple-500)' : 'var(--text-muted)',
        transition: 'var(--transition-base)'
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.NavGlyph, {
      active: isActive
    }), it);
  })));
}
Object.assign(__ds_scope, { SidebarNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/app/SidebarNav.jsx", error: String((e && e.message) || e) }); }

// components/data/ComparisonTable.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ComparisonTable({
  questionLabel = '',
  leftLabel,
  rightLabel,
  rows,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      position: 'relative',
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.1fr 1.3fr 1.3fr',
      alignItems: 'end',
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-core)',
      fontSize: 11,
      fontWeight: 'var(--weight-bold)',
      letterSpacing: '0.11em',
      textTransform: 'uppercase',
      color: 'var(--grey-500)'
    }
  }, questionLabel), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      fontFamily: 'var(--font-core)',
      fontSize: 12,
      fontWeight: 'var(--weight-bold)',
      letterSpacing: '0.11em',
      textTransform: 'uppercase',
      color: 'var(--grey-500)'
    }
  }, leftLabel), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      fontFamily: 'var(--font-core)',
      fontSize: 12,
      fontWeight: 'var(--weight-bold)',
      letterSpacing: '0.11em',
      textTransform: 'uppercase',
      color: '#fff',
      background: 'var(--gradient-purple)',
      borderRadius: 'var(--radius-md) var(--radius-md) 0 0',
      padding: '9px 0'
    }
  }, rightLabel)), rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: '1.1fr 1.3fr 1.3fr',
      alignItems: 'stretch'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-core)',
      fontSize: 12.5,
      fontWeight: 'var(--weight-bold)',
      color: 'var(--ink-900)',
      padding: '15px 14px 15px 0',
      display: 'flex',
      alignItems: 'center'
    }
  }, r.question), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-core)',
      fontSize: 12,
      color: 'var(--text-muted)',
      textAlign: 'center',
      padding: '15px 14px',
      background: i % 2 ? 'var(--grey-100)' : 'var(--white)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, r.left), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-core)',
      fontSize: 12,
      fontWeight: 'var(--weight-bold)',
      color: '#fff',
      textAlign: 'center',
      padding: '15px 14px',
      background: 'var(--gradient-purple)',
      borderRadius: i === rows.length - 1 ? '0 0 var(--radius-md) var(--radius-md)' : 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, r.right))));
}
Object.assign(__ds_scope, { ComparisonTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/ComparisonTable.jsx", error: String((e && e.message) || e) }); }

// components/data/DataTable.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function DataTable({
  columns,
  rows,
  align = {},
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      background: 'var(--white)',
      border: '1px solid var(--grey-200)',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: columns.map(c => c.width || '1fr').join(' '),
      background: 'var(--grey-100)',
      borderBottom: '1px solid var(--grey-200)',
      padding: '9px 15px',
      gap: 10
    }
  }, columns.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      fontFamily: 'var(--font-core)',
      fontSize: 9.5,
      fontWeight: 'var(--weight-bold)',
      letterSpacing: '0.11em',
      textTransform: 'uppercase',
      color: 'var(--grey-500)',
      textAlign: align[c.key] || 'left'
    }
  }, c.label))), rows.map((r, ri) => /*#__PURE__*/React.createElement("div", {
    key: ri,
    style: {
      display: 'grid',
      gridTemplateColumns: columns.map(c => c.width || '1fr').join(' '),
      padding: '11px 15px',
      gap: 10,
      alignItems: 'center',
      borderBottom: ri === rows.length - 1 ? 'none' : '1px solid var(--grey-150)'
    }
  }, columns.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      fontFamily: 'var(--font-core)',
      fontSize: 12,
      fontWeight: i === 0 ? 'var(--weight-semibold)' : 'var(--weight-regular)',
      color: i === 0 ? 'var(--ink-900)' : 'var(--text-muted)',
      textAlign: align[c.key] || 'left'
    }
  }, r[c.key])))));
}
Object.assign(__ds_scope, { DataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/data/Delta.jsx
try { (() => {
function Delta({
  direction = 'up',
  value,
  tone,
  style
}) {
  const positive = tone ? tone === 'positive' : direction === 'up';
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 3,
      fontFamily: 'var(--font-core)',
      fontSize: 11,
      fontWeight: 'var(--weight-semibold)',
      color: positive ? 'var(--green-600)' : 'var(--rose-500)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 9,
      lineHeight: 1
    }
  }, direction === 'up' ? '\u25B2' : '\u25BC'), value);
}
Object.assign(__ds_scope, { Delta });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Delta.jsx", error: String((e && e.message) || e) }); }

// components/data/MetricTile.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function MetricTile({
  label,
  value,
  delta,
  note,
  sparkline,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      background: 'var(--white)',
      border: '1px solid var(--grey-200)',
      borderRadius: 'var(--radius-md)',
      padding: '13px 15px 15px',
      boxShadow: 'var(--shadow-hairline)',
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-core)',
      fontSize: 11,
      fontWeight: 'var(--weight-medium)',
      color: 'var(--text-subtle)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 25,
      fontWeight: 'var(--weight-bold)',
      letterSpacing: '-0.02em',
      color: 'var(--ink-900)',
      marginTop: 5,
      lineHeight: 1.05
    }
  }, value), (delta || note) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 5,
      marginTop: 6
    }
  }, delta, note && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-core)',
      fontSize: 10.5,
      color: 'var(--text-subtle)'
    }
  }, note)), sparkline !== false && /*#__PURE__*/React.createElement("div", {
    style: {
      height: 14,
      borderRadius: 4,
      background: 'var(--purple-50)',
      marginTop: 10
    }
  }));
}
Object.assign(__ds_scope, { MetricTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/MetricTile.jsx", error: String((e && e.message) || e) }); }

// components/data/StatCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function StatCard({
  eyebrow,
  value,
  unit,
  label,
  children,
  variant = 'light',
  style,
  ...rest
}) {
  const dark = variant !== 'light';
  const skins = {
    light: {
      background: 'var(--white)',
      border: '1px solid var(--grey-200)',
      boxShadow: 'var(--shadow-card)'
    },
    purple: {
      background: 'var(--gradient-purple)',
      border: '1px solid transparent'
    },
    ink: {
      background: 'var(--ink-800)',
      border: '1px solid rgba(255,255,255,.08)'
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      borderRadius: 'var(--radius-card)',
      padding: 'var(--card-pad)',
      ...skins[variant],
      ...style
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.AccentRule, {
    tone: dark ? 'mint' : 'purple'
  }), eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-core)',
      fontSize: 10.5,
      fontWeight: 'var(--weight-bold)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: dark ? 'rgba(255,255,255,.6)' : 'var(--grey-500)',
      marginTop: 16
    }
  }, eyebrow), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-stat)',
      fontWeight: 'var(--weight-black)',
      letterSpacing: '-0.03em',
      lineHeight: 1,
      marginTop: eyebrow ? 10 : 16,
      color: variant === 'light' ? 'var(--purple-500)' : '#fff'
    }
  }, value, unit && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.5em',
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: 0,
      marginLeft: 4
    }
  }, unit)), label && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 15,
      fontWeight: 'var(--weight-bold)',
      marginTop: 9,
      color: variant === 'light' ? 'var(--ink-900)' : '#fff'
    }
  }, label), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-small)',
      lineHeight: 'var(--leading-loose)',
      marginTop: 8,
      color: variant === 'light' ? 'var(--text-muted)' : variant === 'purple' ? 'var(--text-on-purple-muted)' : 'var(--text-on-dark-muted)'
    }
  }, children));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/data/ToggleRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ToggleRow({
  title,
  description,
  defaultOn = true,
  onChange,
  style,
  ...rest
}) {
  const [on, setOn] = React.useState(defaultOn);
  const toggle = () => {
    const next = !on;
    setOn(next);
    onChange && onChange(next);
  };
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      justifyContent: 'space-between',
      background: 'var(--white)',
      border: '1px solid var(--grey-200)',
      borderRadius: 'var(--radius-md)',
      padding: '13px 15px',
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 13,
      fontWeight: 'var(--weight-bold)',
      color: 'var(--ink-900)'
    }
  }, title), description && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-core)',
      fontSize: 11,
      color: 'var(--text-subtle)',
      marginTop: 3
    }
  }, description)), /*#__PURE__*/React.createElement("button", {
    onClick: toggle,
    "aria-pressed": on,
    style: {
      flex: 'none',
      width: 38,
      height: 21,
      borderRadius: 'var(--radius-pill)',
      border: 'none',
      background: on ? 'var(--purple-500)' : 'var(--grey-300)',
      cursor: 'pointer',
      padding: 2,
      display: 'flex',
      justifyContent: on ? 'flex-end' : 'flex-start',
      transition: 'var(--transition-base)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 17,
      height: 17,
      borderRadius: '50%',
      background: '#fff',
      display: 'block'
    }
  })));
}
Object.assign(__ds_scope, { ToggleRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/ToggleRow.jsx", error: String((e && e.message) || e) }); }

// components/slide/Slide.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Slide({
  variant = 'light',
  footerNote = 'tryaizy.com',
  showFooter = true,
  logoBasePath = '../assets',
  padded = true,
  children,
  style,
  ...rest
}) {
  const grounds = {
    light: {
      background: 'var(--gradient-page-light)'
    },
    dark: {
      background: 'var(--gradient-page-dark)'
    },
    bleed: {
      background: 'var(--ink-950)'
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      position: 'relative',
      width: 1280,
      height: 720,
      overflow: 'hidden',
      fontFamily: 'var(--font-core)',
      ...grounds[variant],
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      padding: padded ? '68px 70px 0' : 0
    }
  }, children), showFooter && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 70,
      bottom: 26,
      fontSize: 10.5,
      color: variant === 'light' ? 'var(--text-subtle)' : 'rgba(255,255,255,.5)'
    }
  }, footerNote), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 70,
      bottom: 26,
      lineHeight: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    variant: variant === 'light' ? 'lockup-dark' : 'lockup-white',
    height: 20,
    basePath: logoBasePath
  }))));
}
Object.assign(__ds_scope, { Slide });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/slide/Slide.jsx", error: String((e && e.message) || e) }); }

// components/slide/SlideHeader.jsx
try { (() => {
function SlideHeader({
  eyebrow,
  lines,
  lead,
  tone = 'light',
  size = 'display',
  maxWidth = 760,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: style
  }, eyebrow && /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    tone: tone === 'dark' ? 'dark' : 'light'
  }, eyebrow), /*#__PURE__*/React.createElement(__ds_scope.GradientHeadline, {
    lines: lines,
    size: size,
    tone: tone,
    style: {
      marginTop: 14,
      fontSize: size === 'display' ? 40 : undefined
    }
  }), lead && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14.5,
      lineHeight: 1.5,
      marginTop: 14,
      maxWidth,
      color: tone === 'dark' ? 'var(--text-on-dark-muted)' : 'var(--text-muted)'
    }
  }, lead));
}
Object.assign(__ds_scope, { SlideHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/slide/SlideHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/platform/Aanbevelingen.jsx
try { (() => {
const {
  RecommendationRow,
  Button,
  AppFrame
} = window.AizyDesignSystem_8a3556;
const ITEMS = [{
  title: 'Budget verschoven naar best presterende campagnes',
  meta: 'Uitgevoerd · +€ 8.240 omzet',
  status: 'Uitgevoerd',
  tone: 'positive'
}, {
  title: '12 zoekwoorden met hoge conversie toegevoegd',
  meta: 'Wacht op akkoord · zekerheid 91%',
  status: 'Bekijken',
  tone: 'pending'
}, {
  title: '23 irrelevante zoektermen uitgesloten',
  meta: 'Uitgevoerd · −€ 1.310 verspilling',
  status: 'Uitgevoerd',
  tone: 'positive'
}, {
  title: 'Doelgroep verbreed na stabiele conversieratio',
  meta: 'Wacht op akkoord · zekerheid 78%',
  status: 'Bekijken',
  tone: 'pending'
}, {
  title: 'Advertentiemoeheid gedetecteerd op 4 creatives',
  meta: 'Nieuwe varianten klaargezet',
  status: 'Bekijken',
  tone: 'pending'
}];
function Aanbevelingen({
  sidebar
}) {
  const [done, setDone] = React.useState([]);
  const items = ITEMS.map((it, i) => done.includes(i) ? {
    ...it,
    status: 'Uitgevoerd',
    tone: 'positive',
    meta: 'Zojuist doorgevoerd'
  } : it);
  const open = items.filter(i => i.tone === 'pending').length;
  return /*#__PURE__*/React.createElement(AppFrame, {
    sidebar: sidebar,
    title: "Aanbevelingen",
    subtitle: open + ' open · ' + (5 - open) + ' vandaag automatisch uitgevoerd',
    actions: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      onClick: () => setDone([0, 1, 2, 3, 4])
    }, "Alles doorvoeren")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 8
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement(RecommendationRow, {
    key: i,
    title: it.title,
    meta: it.meta,
    statusTone: it.tone,
    status: it.tone === 'pending' ? /*#__PURE__*/React.createElement("span", {
      onClick: () => setDone(d => [...d, i]),
      style: {
        cursor: 'pointer'
      }
    }, it.status) : it.status
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      color: 'var(--text-subtle)',
      marginTop: 11
    }
  }, "Elke ingreep staat met tijd, reden en resultaat in de auditlog."));
}
Object.assign(window, {
  Aanbevelingen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/platform/Aanbevelingen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/platform/AizyAgent.jsx
try { (() => {
const {
  AgentExchange,
  Button,
  AppFrame,
  Badge
} = window.AizyDesignSystem_8a3556;
const ROWS = [['Search — Generiek NL', '€ 12.480', '3,10', '−€ 2.180 verspild'], ['PMax — Shopping', '€ 9.240', '2,84', '−€ 1.640 verspild'], ['Meta — Brede doelgroep', '€ 6.910', '4,22', '−€ 720 verspild']];
function AizyAgent({
  sidebar
}) {
  const [state, setState] = React.useState('idle');
  return /*#__PURE__*/React.createElement(AppFrame, {
    sidebar: sidebar,
    title: "Aizy Agent",
    subtitle: "Verbonden met Google Ads & Meta \xB7 leesrechten \xE9n schrijfrechten",
    actions: /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "sm"
    }, "Auditlog")
  }, /*#__PURE__*/React.createElement(AgentExchange, {
    question: "Welke campagnes verspillen budget deze week en wat stel je voor?"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 13,
      fontWeight: 700,
      color: 'var(--ink-900)'
    }
  }, "Drie campagnes presteren onder je doel-ROAS van 5,00."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10
    }
  }, ROWS.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: '1.5fr 80px 46px 1fr',
      gap: 10,
      alignItems: 'center',
      padding: '8px 0',
      borderTop: i ? '1px solid var(--grey-150)' : 'none',
      fontSize: 11.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      color: 'var(--ink-900)'
    }
  }, r[0]), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      textAlign: 'right'
    }
  }, r[1]), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--rose-500)',
      fontWeight: 700,
      textAlign: 'right'
    }
  }, r[2]), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-subtle)',
      textAlign: 'right'
    }
  }, r[3])))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--grey-100)',
      borderRadius: 'var(--radius-sm)',
      padding: '11px 13px',
      marginTop: 12,
      fontSize: 11.5,
      lineHeight: 1.6,
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--ink-900)'
    }
  }, "Voorstel:"), " verschuif \u20AC 4.540 naar Search Brand en Meta Retargeting. Verwachte impact: ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--green-600)'
    }
  }, "+\u20AC 21.400 omzet"), " over 30 dagen \xB7 zekerheid 87%."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      marginTop: 12
    }
  }, state === 'done' ? /*#__PURE__*/React.createElement(Badge, {
    tone: "positive",
    dot: true
  }, "Doorgevoerd \xB7 vastgelegd in de auditlog") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: () => setState('done')
  }, "Doorvoeren in de accounts"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    onClick: () => setState('sim')
  }, "Alleen simuleren"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10.5,
      color: 'var(--text-subtle)'
    }
  }, state === 'sim' ? 'Simulatie: +€ 21.400 omzet, geen wijziging in de accounts' : 'Wordt vastgelegd in de auditlog')))));
}
Object.assign(window, {
  AizyAgent
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/platform/AizyAgent.jsx", error: String((e && e.message) || e) }); }

// ui_kits/platform/Autoscale.jsx
try { (() => {
const {
  ToggleRow,
  Button,
  AppFrame
} = window.AizyDesignSystem_8a3556;
function Limit({
  label,
  value
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--white)',
      border: '1px solid var(--grey-200)',
      borderRadius: 'var(--radius-md)',
      padding: '13px 15px 15px',
      boxShadow: 'var(--shadow-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--text-subtle)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 27,
      fontWeight: 800,
      letterSpacing: '-0.025em',
      color: 'var(--ink-900)',
      marginTop: 4
    }
  }, value));
}
function Autoscale({
  sidebar
}) {
  return /*#__PURE__*/React.createElement(AppFrame, {
    sidebar: sidebar,
    title: "Autoscale",
    subtitle: "Jij stelt de grenzen. De software handelt daarbinnen.",
    actions: /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "sm"
    }, "Grenzen aanpassen")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Limit, {
    label: "Doel-ROAS",
    value: "5,00"
  }), /*#__PURE__*/React.createElement(Limit, {
    label: "Maximaal dagbudget",
    value: "\u20AC 3.500"
  }), /*#__PURE__*/React.createElement(Limit, {
    label: "Ingrepen vandaag",
    value: "146"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 8,
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement(ToggleRow, {
    title: "Budgetbewaking",
    description: "Verhoogt tot 25% bij ROAS boven doel"
  }), /*#__PURE__*/React.createElement(ToggleRow, {
    title: "Biedsturing",
    description: "Realtime per zoekwoord, apparaat en tijdstip"
  }), /*#__PURE__*/React.createElement(ToggleRow, {
    title: "Verspillingsstop",
    description: "Pauzeert onder 60% van doel-ROAS"
  }), /*#__PURE__*/React.createElement(ToggleRow, {
    title: "Creatieve rotatie",
    description: "Vervangt bij advertentiemoeheid"
  }), /*#__PURE__*/React.createElement(ToggleRow, {
    title: "Cross-channel verschuiving",
    description: "Google \u2194 Meta \u2194 TikTok"
  })));
}
Object.assign(window, {
  Autoscale
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/platform/Autoscale.jsx", error: String((e && e.message) || e) }); }

// ui_kits/platform/Campagnes.jsx
try { (() => {
const {
  DataTable,
  Badge,
  Button,
  AppFrame,
  Delta,
  Chip
} = window.AizyDesignSystem_8a3556;
function Campagnes({
  sidebar
}) {
  const [kanaal, setKanaal] = React.useState('Alle');
  const rows = [{
    c: 'Search · Brand NL',
    k: 'Google',
    spend: '€ 21.480',
    roas: '8,42',
    st: 'Actief',
    tone: 'positive'
  }, {
    c: 'Search · Generiek NL',
    k: 'Google',
    spend: '€ 12.480',
    roas: '3,10',
    st: 'Onder doel',
    tone: 'negative'
  }, {
    c: 'PMax · Shopping',
    k: 'Google',
    spend: '€ 18.630',
    roas: '6,10',
    st: 'Actief',
    tone: 'positive'
  }, {
    c: 'PMax · Shopping BE',
    k: 'Google',
    spend: '€ 9.240',
    roas: '2,84',
    st: 'Onder doel',
    tone: 'negative'
  }, {
    c: 'Prospecting · Advantage+',
    k: 'Meta',
    spend: '€ 14.890',
    roas: '5,74',
    st: 'Optimaliseert',
    tone: 'pending'
  }, {
    c: 'Retargeting · Dynamisch',
    k: 'Meta',
    spend: '€ 8.410',
    roas: '9,96',
    st: 'Actief',
    tone: 'positive'
  }, {
    c: 'Brede doelgroep',
    k: 'Meta',
    spend: '€ 6.910',
    roas: '4,22',
    st: 'Onder doel',
    tone: 'negative'
  }, {
    c: 'Spark Ads · NL',
    k: 'TikTok',
    spend: '€ 3.180',
    roas: '5,08',
    st: 'Actief',
    tone: 'positive'
  }].filter(r => kanaal === 'Alle' || r.k === kanaal);
  return /*#__PURE__*/React.createElement(AppFrame, {
    sidebar: sidebar,
    title: "Campagnes",
    subtitle: "Doel-ROAS 5,00 \xB7 8 campagnes over 3 kanalen",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "sm"
    }, "Laatste 30 dagen"), /*#__PURE__*/React.createElement(Button, {
      size: "sm"
    }, "Grenzen aanpassen"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 7,
      marginBottom: 10
    }
  }, ['Alle', 'Google', 'Meta', 'TikTok'].map(k => /*#__PURE__*/React.createElement("button", {
    key: k,
    onClick: () => setKanaal(k),
    style: {
      border: '1px solid ' + (kanaal === k ? 'transparent' : 'var(--grey-200)'),
      background: kanaal === k ? 'var(--purple-500)' : 'var(--white)',
      color: kanaal === k ? '#fff' : 'var(--text-muted)',
      fontFamily: 'var(--font-core)',
      fontSize: 11.5,
      fontWeight: 600,
      padding: '6px 13px',
      borderRadius: 'var(--radius-pill)',
      cursor: 'pointer',
      transition: 'var(--transition-base)'
    }
  }, k)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Chip, {
    style: {
      fontSize: 11,
      padding: '6px 12px'
    }
  }, "4.212 ingrepen \xB7 30d")), /*#__PURE__*/React.createElement(DataTable, {
    align: {
      spend: 'right',
      roas: 'right'
    },
    columns: [{
      key: 'c',
      label: 'Campagne',
      width: '1.7fr'
    }, {
      key: 'k',
      label: 'Kanaal',
      width: '76px'
    }, {
      key: 'spend',
      label: 'Spend',
      width: '80px'
    }, {
      key: 'roas',
      label: 'ROAS',
      width: '52px'
    }, {
      key: 'st',
      label: 'Status',
      width: '108px'
    }],
    rows: rows.map(r => ({
      c: r.c,
      k: r.k,
      spend: r.spend,
      roas: /*#__PURE__*/React.createElement("span", {
        style: {
          color: r.tone === 'negative' ? 'var(--rose-500)' : 'var(--purple-500)',
          fontWeight: 600
        }
      }, r.roas),
      st: /*#__PURE__*/React.createElement(Badge, {
        tone: r.tone
      }, r.st)
    }))
  }));
}
Object.assign(window, {
  Campagnes
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/platform/Campagnes.jsx", error: String((e && e.message) || e) }); }

// ui_kits/platform/Overzicht.jsx
try { (() => {
const {
  MetricTile,
  Delta,
  DataTable,
  Badge,
  Button,
  AppFrame
} = window.AizyDesignSystem_8a3556;
function Roas({
  v
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--purple-500)',
      fontWeight: 600
    }
  }, v);
}
function Overzicht({
  sidebar
}) {
  return /*#__PURE__*/React.createElement(AppFrame, {
    sidebar: sidebar,
    title: "Jouw overzicht",
    subtitle: "Google & Meta gekoppeld \xB7 laatste 30 dagen",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "sm"
    }, "Laatste 30 dagen"), /*#__PURE__*/React.createElement(Button, {
      size: "sm"
    }, "Rapport"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(MetricTile, {
    label: "Advertentiebudget",
    value: "\u20AC 63,4K",
    delta: /*#__PURE__*/React.createElement(Delta, {
      direction: "down",
      value: "2,1%",
      tone: "negative"
    }),
    note: "vs vorige periode"
  }), /*#__PURE__*/React.createElement(MetricTile, {
    label: "Omzet toegerekend",
    value: "\u20AC 412K",
    delta: /*#__PURE__*/React.createElement(Delta, {
      value: "18,5%"
    })
  }), /*#__PURE__*/React.createElement(MetricTile, {
    label: "Gemiddelde ROAS",
    value: "6,49",
    delta: /*#__PURE__*/React.createElement(Delta, {
      value: "12,4%"
    })
  }), /*#__PURE__*/React.createElement(MetricTile, {
    label: "Conversies",
    value: "3.128",
    delta: /*#__PURE__*/React.createElement(Delta, {
      value: "9,7%"
    })
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.35fr 1fr',
      gap: 10,
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--white)',
      border: '1px solid var(--grey-200)',
      borderRadius: 'var(--radius-md)',
      padding: '13px 15px 15px',
      boxShadow: 'var(--shadow-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--text-subtle)'
    }
  }, "Openstaande aanbevelingen"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 28,
      fontWeight: 800,
      letterSpacing: '-0.02em',
      color: 'var(--ink-900)',
      marginTop: 4
    }
  }, "14"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--green-600)',
      marginTop: 7
    }
  }, "9 automatisch uitgevoerd vandaag")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--white)',
      border: '1px solid var(--grey-200)',
      borderRadius: 'var(--radius-md)',
      padding: '13px 15px 15px',
      boxShadow: 'var(--shadow-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--text-subtle)'
    }
  }, "Ingrepen in jouw campagnes (30d)"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 28,
      fontWeight: 800,
      letterSpacing: '-0.02em',
      color: 'var(--ink-900)',
      marginTop: 4
    }
  }, "4.212"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 7
    }
  }, /*#__PURE__*/React.createElement(Delta, {
    value: "4,4% t.o.v. vorige maand"
  })))), /*#__PURE__*/React.createElement(DataTable, {
    style: {
      marginTop: 10
    },
    align: {
      spend: 'right',
      roas: 'right'
    },
    columns: [{
      key: 'c',
      label: 'Campagne',
      width: '1.7fr'
    }, {
      key: 'k',
      label: 'Kanaal',
      width: '80px'
    }, {
      key: 'spend',
      label: 'Spend',
      width: '80px'
    }, {
      key: 'roas',
      label: 'ROAS',
      width: '52px'
    }, {
      key: 'st',
      label: 'Status',
      width: '104px'
    }],
    rows: [{
      c: 'Search · Brand NL',
      k: 'Google',
      spend: '€ 21.480',
      roas: /*#__PURE__*/React.createElement(Roas, {
        v: "8,42"
      }),
      st: /*#__PURE__*/React.createElement(Badge, {
        tone: "positive"
      }, "Actief")
    }, {
      c: 'PMax · Shopping',
      k: 'Google',
      spend: '€ 18.630',
      roas: /*#__PURE__*/React.createElement(Roas, {
        v: "6,10"
      }),
      st: /*#__PURE__*/React.createElement(Badge, {
        tone: "positive"
      }, "Actief")
    }, {
      c: 'Prospecting · Advantage+',
      k: 'Meta',
      spend: '€ 14.890',
      roas: /*#__PURE__*/React.createElement(Roas, {
        v: "5,74"
      }),
      st: /*#__PURE__*/React.createElement(Badge, {
        tone: "pending"
      }, "Optimaliseert")
    }, {
      c: 'Retargeting · Dynamisch',
      k: 'Meta',
      spend: '€ 8.410',
      roas: /*#__PURE__*/React.createElement(Roas, {
        v: "9,96"
      }),
      st: /*#__PURE__*/React.createElement(Badge, {
        tone: "positive"
      }, "Actief")
    }]
  }));
}
Object.assign(window, {
  Overzicht
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/platform/Overzicht.jsx", error: String((e && e.message) || e) }); }

__ds_ns.AgentExchange = __ds_scope.AgentExchange;

__ds_ns.AppFrame = __ds_scope.AppFrame;

__ds_ns.NavGlyph = __ds_scope.NavGlyph;

__ds_ns.RecommendationRow = __ds_scope.RecommendationRow;

__ds_ns.SidebarNav = __ds_scope.SidebarNav;

__ds_ns.BulletList = __ds_scope.BulletList;

__ds_ns.CalloutBar = __ds_scope.CalloutBar;

__ds_ns.GradientHeadline = __ds_scope.GradientHeadline;

__ds_ns.NumberedStep = __ds_scope.NumberedStep;

__ds_ns.PriceCard = __ds_scope.PriceCard;

__ds_ns.QuoteCard = __ds_scope.QuoteCard;

__ds_ns.AccentRule = __ds_scope.AccentRule;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.ComparisonTable = __ds_scope.ComparisonTable;

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.Delta = __ds_scope.Delta;

__ds_ns.MetricTile = __ds_scope.MetricTile;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.ToggleRow = __ds_scope.ToggleRow;

__ds_ns.Slide = __ds_scope.Slide;

__ds_ns.SlideHeader = __ds_scope.SlideHeader;

})();
