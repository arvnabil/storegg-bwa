import WidgetFooterLink from './WidgetFooterLink';
import WidgetFooterLogo from './WidgetFooterLogo';

export default function index() {
  return (
    <section className="footer pt-50">
      <footer>
        <div className="container-fluid">
          <div className="row">
            <WidgetFooterLogo />
            <WidgetFooterLink />
          </div>
        </div>
      </footer>
    </section>
  );
}
